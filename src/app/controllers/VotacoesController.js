import data from '../../data/data.json';

class VotacoesController {
  async index(request, response) {
    return response.json(data)
  }
}

export default new VotacoesController();