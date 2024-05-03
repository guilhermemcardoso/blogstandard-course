export function getContent(topic, keywords) {
  const response = `
  # Titulo
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ex diam, imperdiet ut lobortis quis, porttitor non est. Aliquam sit amet cursus ante. In eget tincidunt mauris. Maecenas et cursus odio, vel lacinia justo. Praesent nulla turpis, eleifend pharetra quam eget, condimentum aliquam arcu. Quisque odio est, consectetur et posuere sed, scelerisque non velit. Curabitur fermentum et nunc non finibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi a aliquam lacus. Cras et fermentum ipsum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam in feugiat nisi. Pellentesque condimentum, nisi vitae luctus laoreet, libero tellus congue nunc, quis posuere leo dui nec leo.
  Etiam finibus metus et nisi dictum venenatis. Fusce eu dolor eu magna fermentum hendrerit sit amet sed nisl. In mi dui, convallis sit amet mauris nec, dignissim bibendum mi. Ut vel neque volutpat, aliquet libero eget, consequat neque. Nunc mattis maximus lacinia. Nullam varius aliquet lacus at euismod. Curabitur suscipit placerat tincidunt. Donec pharetra mattis magna ut bibendum. Pellentesque hendrerit eros risus, fermentum suscipit lectus ultrices quis. Etiam mollis dictum lacus, in feugiat nunc gravida at. Vestibulum tincidunt magna elit, sit amet egestas felis rhoncus non. Aliquam eget justo nunc. Suspendisse ante est, malesuada eu tristique eu, sodales ut nulla. Nulla id justo mi. Nunc consequat a orci accumsan tempor.
  
  ### Subtitulo
  
  Donec vestibulum, quam eget posuere aliquet, lacus neque convallis dolor, eu venenatis velit erat eget leo. Sed fringilla tempus ante eget feugiat. Maecenas sed luctus sem, consequat interdum dui. Pellentesque nec quam ut felis consectetur fringilla. Vestibulum malesuada pretium consequat. In metus velit, cursus eget quam sed, iaculis efficitur dui. Pellentesque eu dui tellus. Vivamus et sapien posuere, pretium nisl vitae, dapibus eros. Mauris quis nisi aliquam, euismod sapien sed, blandit orci. Integer et auctor nisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut pulvinar ultrices velit, ut pharetra ligula hendrerit non.
  Proin eu ligula id eros commodo convallis. Nunc pretium et purus egestas sollicitudin. Vestibulum molestie neque at lorem rutrum, non cursus felis congue. Nam eget hendrerit tellus. Nullam est felis, facilisis ac iaculis at, porta vel diam. Donec efficitur diam et diam imperdiet faucibus. Phasellus malesuada, diam quis consequat faucibus, erat odio fermentum tellus, et aliquam odio felis non enim. Suspendisse id tempus enim, id accumsan lorem.
  
  #### Subtitulo 2
  
  Donec vestibulum, quam eget posuere aliquet, lacus neque convallis dolor, eu venenatis velit erat eget leo. Sed fringilla tempus ante eget feugiat. Maecenas sed luctus sem, consequat interdum dui. Pellentesque nec quam ut felis consectetur fringilla. Vestibulum malesuada pretium consequat. In metus velit, cursus eget quam sed, iaculis efficitur dui. Pellentesque eu dui tellus. Vivamus et sapien posuere, pretium nisl vitae, dapibus eros. Mauris quis nisi aliquam, euismod sapien sed, blandit orci. Integer et auctor nisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut pulvinar ultrices velit, ut pharetra ligula hendrerit non.
  Proin eu ligula id eros commodo convallis. Nunc pretium et purus egestas sollicitudin. Vestibulum molestie neque at lorem rutrum, non cursus felis congue. Nam eget hendrerit tellus. Nullam est felis, facilisis ac iaculis at, porta vel diam. Donec efficitur diam et diam imperdiet faucibus. Phasellus malesuada, diam quis consequat faucibus, erat odio fermentum tellus, et aliquam odio felis non enim. Suspendisse id tempus enim, id accumsan lorem.

  Topic: ${topic}
  
  Keywords: ${keywords}
  `;

  return response;
}

export function getSeo(topic, keywords) {
  return {
    title: `Titulo do Post com Topico ${topic}`,
    metaDescription: `Meta description do post criado com as keywords ${keywords}`,
  };
}
