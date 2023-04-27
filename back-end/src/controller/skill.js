const dataSource = require("../utils").dataSource;
const Skill = require("../entity/Skill");

module.exports = {
   create: async (req, res) => {
      try {
         await dataSource
            .getRepository(Skill)
            .save(req.body)
         res.send("Skill Created")

      } catch (error) {
         res.send("error")
      }
   },
   read: async (req, res) => {
      try {
         const data = await dataSource
            .getRepository(Skill)
            .find()
         res.send(data);
      } catch (error) {
         res.send("error")
      }
   },
   delete: async (req, res) => {
      try {
         await dataSource
            .getRepository(Skill)
            .delete(req.body.id)
         res.send("Skill supprimes");
      } catch (error) {
         res.send("error")
      }
   },
   update: async (req, res) => {
      try {
         await dataSource
            .getRepository(Skill)
            .update(req.body.id, req.body.newData)
         res.send("Skill modifies");
      } catch (error) {
         res.send("error")
      }
   }
}
