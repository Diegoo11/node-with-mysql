exports.list = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM task', (error, rows) => {
      if (error) {
        res.json(error);
      }
      res.render('tasks', {
        data: rows,
      });
    });
  });
};

exports.saveTask = (req, res) => {
  const task = { name: req.body.name, description: req.body.description, state: req.body.state === 'on' };
  req.getConnection((err, conn) => {
    conn.query('INSERT INTO task SET ?', [task], () => {
      res.redirect('/');
    });
  });
};

exports.editGet = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM task WHERE id = ?', [id], (error, rows) => {
      res.render('taskEdit', {
        data: rows[0],
      });
    });
  });
};

exports.editPost = (req, res) => {
  const { id } = req.params;
  const campos = req.body;
  if (!campos.state) {
    campos.state = false;
  }
  campos.state = campos.state === 'on';
  req.getConnection((err, conn) => {
    conn.query('UPDATE task set ? WHERE id = ?', [campos, id], () => {
      res.redirect('/');
    });
  });
};

exports.deleteTask = (req, res) => {
  const { id } = req.params;
  req.getConnection((err, conn) => {
    conn.query('DELETE FROM task WHERE id = ?', [id], () => {
      res.redirect('/');
    });
  });
};
