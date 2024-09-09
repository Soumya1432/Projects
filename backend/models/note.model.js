

module.exports = (sequelize,Sequelize) =>{
    const notes = sequelize.define('notes',{
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
          },
          title: {
            type: Sequelize.TEXT,
            allowNull: false,
          },
          content: {
            type: Sequelize.TEXT,
            allowNull: false,
          },
        //   created_at: {
        //     type: Sequelize.DATE,
        //     allowNull: false,
        //     defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        //   },
        //   updated_at: {
        //     type: Sequelize.DATE,
        //     allowNull: false,
        //     defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        //     onUpdate: Sequelize.literal('CURRENT_TIMESTAMP'),
        //   },
        
    },
{
      timestamps: true, // Enable timestamps for createdAt and updatedAt
      createdAt: 'created_at', // Map Sequelize's createdAt to MySQL's created_at
      updatedAt: 'updated_at',
})
    return notes;
}