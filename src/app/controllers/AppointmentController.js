const { User, Appointment } = require('../models')
class AppointmentController {
  async create (req, res) {
    const provider = await User.findByPk(req.params.provider)
    return res.render('appointments/create', { provider })
  }

  async store (req, res) {
    const { provider } = req.params
    const { id } = req.session.user
    const { date } = req.body

    await Appointment.create({
      provider_id: provider,
      user_id: id,
      date
    })

    return res.redirect('/')
  }
}

module.exports = new AppointmentController()
