HouSSaM.on('message', message => {//iiHouSSaM#9494
        if (!nounou.includes(message.author.id)) return;//iiHouSSaM#9494
  if (message.content === '852') {//iiHouSSaM#9494
   // let channel = guild.channels.find('name', '➥ AFK..');//NouNouDz#6720
message.delete()
  let channel = nounoudz.channels.get('514641715651543041');//iiHouSSaM#9494
        let generale = nounoudz.channels.get('343743154429755392');//iiHouSSaM#9494
      
          //if (!channel) return generale.join() .then(connection => message.channel.send(` \` ** Done.:white_check_mark:  ** `));
      
  channel.join()//iiHouSSaM#9494
  .then(connection => message.channel.send(` ** Done.:white_check_mark:  ** `))//NouNouDz#6720
  .catch(console.error);//iiHouSSaM#9494
    }
});
