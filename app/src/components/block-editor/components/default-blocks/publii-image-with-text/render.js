function render (blockData) {
  let id = blockData.config.advanced.id ? ' id="' + blockData.config.advanced.id + '"' : '';
  let description = `<figdescription>${blockData.content.description}</figdescription>`;
  let title = `<figtitle>${blockData.content.title}</figtitle>`;
  let cssClasses = [blockData.config.advanced.cssClasses, 'post__image-with-text', 'post__image-with-text--' + blockData.config.imageAlign].filter(item => item && item.trim() !== '');
  cssClasses = cssClasses.length ? ' class="' + cssClasses.join(' ') + '"' : '';
  let html = ``;

  if (blockData.content.description.trim() === '') {
    description = '';
  }

  if (blockData.config.link.url !== '') {
    let targetBlank = '';
    let relAttr = [];

    if (blockData.config.link.noFollow) {
      relAttr.push('nofollow noopener');
    }

    if (blockData.config.link.sponsored) {
      relAttr.push('sponsored');
    }

    if (blockData.config.link.ugc) {
      relAttr.push('ugc');
    }

    if (relAttr.length) {
      relAttr = ' rel="' + relAttr.join(' ') + '"';
    }

    if (blockData.config.link.targetBlank) {
      targetBlank = ' target="_blank"'
    }

    html = `
    <figure${id}${cssClasses}>
      <a href="${blockData.config.link.url}"${relAttr}${targetBlank}>
        <img src="${blockData.content.image}" height="${blockData.content.imageHeight}" width="${blockData.content.imageWidth}" alt="${blockData.content.alt}" />
      </a>
      <div class="image-description">

      ${title}
      ${description}
      </div>

    </figure> 
    
      
    `;
  } else {
    html = `
    <figure${id}${cssClasses}>
      <img src="${blockData.content.image}" height="${blockData.content.imageHeight}" width="${blockData.content.imageWidth}" alt="${blockData.content.alt}" />
      <div class="image-description">
      
      ${title}
      ${description}
      </div>
    </figure> 
    
      
    `;
  }


  return html;
};

module.exports = render;
