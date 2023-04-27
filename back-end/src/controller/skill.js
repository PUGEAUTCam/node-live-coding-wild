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
         console.log(error);
         res.status(400).json({ error })
      }
   },
   read: async (req, res) => {
      try {
         const data = await dataSource
            .getRepository(Skill)
            .find()
         res.send(data);
      } catch (error) {
         console.log(error);
         res.status(400).json({ error })
      }
   },
   delete: async (req, res) => {
      try {
         await dataSource
            .getRepository(Skill)
            .delete(req.body.id)
         res.send("Skill supprimes");
      } catch (error) {
         console.log(error);
         res.status(400).json({ error })
      }
   },
   update: async (req, res) => {
      try {
         await dataSource
            .getRepository(Skill)
            .update(req.body.id, req.body.newData)
         res.send("Skill modifies");
      } catch (error) {
         console.log(error);
         res.status(400).json({ error })
      }
   }
}
