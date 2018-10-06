const Mutation = {
  createDraft: (parent, args, ctx) => {
    return ctx.db.createPost({
      title: args.title,
      content: args.content,
      author: { connect: { email: args.authorEmail } },
    })
  },
  createPersona: (parent, args, ctx) => {
    return ctx.db.createPersona({
      name: args.name,
      apellido: args.apellido,
    })
  },

  deletePost: (parent, { id }, ctx) => ctx.db.deletePost({ id }),

  publish: (parent, { id }, ctx) => {
    return ctx.db.updatePost({
      where: { id },
      data: { isPublished: true },
    })
  },
  updatePersona: (parent, args, ctx) => {
    return ctx.db.updatePersona({
      where: { id: args.id },
      data: { name: args.name },
    })
  },
}

module.exports = {
  Mutation,
}
