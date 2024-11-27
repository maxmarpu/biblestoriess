// Bible story data
const stories = {
    creation: {
        title: "The Creation",
        content: "ఆదియందు , ఇంకా  కాలము ఆరంభం కాకముందు  దేవుడు ఈ లోకాన్ని ఎలా  సృష్టించాడో చెప్తుంది బైబిల్ . భూమి సూన్యంగా , చీకటితో నిండి ఉంది ,దాని మీద జీవంగాని వెలుగు గాని లేవు . 6 రోజుల్లో దేవుడు ఈ ప్రపంచాన్ని, భూమి మీద జీవించే ప్రతి దాన్ని సృష్టించాడు . దేవుడు సృష్టించిన మొట్ట మొదటిది వెలుగు. దేవుడు వెలుగు కలుగును గాక అన్నాడు అకస్మాత్తుగా , సూన్యముగా ఉన్న భూమి మీద  పరుచుకొని  ఎగిసిపడుతున్న నీళ్ళపైన మొట్టమొదటి దేదీప్యమానమైన వెలుగు ప్రకాశించడం ఆరంభించింది. ఆ వెలుగు మంచిదిగా ఉన్నట్లు దేవుడు చూసాడు ,ఆ వెలుగుకు పగలు అని పేరు పెట్టాడు చీకటినేమో రాత్రి అని పిలిచాడు . ఇప్పుడు భూమి అంతటా పరుచుకొని ఉన్న నీళ్లు వెనక్కి వెళ్లిపోవాలని దేవుడు ఆజ్జ్ణాపించాడు .  దేవుడు భూమిని ఆరిన నేలగాను,పెద్ద సముద్ర జలాలుగాను  వేరు చేశాడు .  అది అలాగే  జరిగింది . ఇప్పుడు  ప్రపంచంలోకి పర్వతాలు,లోయలు వచ్చేశాయి సరస్సులు నదులు కూడా ఉన్నాయి. అప్పు డు దేవుడు , భూమి నిండా పచ్చని గడ్డి మొలవాలని అన్నాడు ఆయన ప్రతి చోటా ఎతైన చెట్లను అందమైన పుష్పాలను పుట్టించాడు ఈ ప్రపంచాన్ని రంగులతో నింపేసాడు తాను సృష్టించిన సృష్టి అద్భుతంగా ఉందని చుసిన దేవుడు ''ఇది మంచిదిగా ఉంది అనుకున్నాడు . 4వ  రోజున దేవుడు సూర్యుణ్ణి ,చంద్రుణ్ణి  నక్షత్ర లను చేసాడు . పగటి పూట సూర్యుడు ఆకాశమునుండి వెలిగేలా ,చంద్రుడు  రాత్రివేళ విశ్వమంతటా తళుక్కున మెరిసే లెక్కలేనన్ని మార్ తారలతోపాటు వెలిగేలా చేసాడు . అయితే భూమి అంతా చాలా నిశబ్ధంగా , ప్రశాంతంగా ఉంది ఎందుకంటే అప్పటికి ఇంకా జీవము గల ఏ ప్రాణి సృష్టించబడ లేదు .  5వ రోజున దేవుడు సముద్రాలలో నదులలో చేపలను ,ఆకాశంలో ఎగిరే పక్షులను సృష్టించాడు.6వ రోజున, భూమి మీద ఆరిన నేలపై తిరిగి రకరకాల జంతువులను  దేవుడు సృష్టించాడు ఉదా : ఏనుగులు ,సింహాలు ,పులులు  పశువులు ,గొర్రెలు ,కుక్కలు,పిల్లులు   మొదలుకొని భూమ్మీద కనిపించే చిన్ని చిన్ని ప్రాణులు వరకు , నీవు ఉహించగల ప్రతి జంతువులను దేవుడు చేసాడు దేవుడు వీటినన్నిటిని సృష్టించినప్పుడు  ''ఇదంతా  చాలా చాల బావుంది'' అనుకున్నాడు. దేవుడు  లోకాన్ని సృష్టించడం దాదాపు పూర్తి చేసాడు అయితే ప్రాముఖ్యమైనదేదో ఒకటి ఇంకా కనిపించడం లేదు . ఆయినా సృష్టి అంతటిలో మహా అద్భుతమైనది ఇంకా సృష్టించబడ లేదు అని  దేవునికి తెలుసు"
    },
    noah: {
        title: "Noah's Ark",
        content: "God instructed Noah to build an ark to save his family and two of every kind of animal from a great flood. Noah obeyed, and the ark carried them to safety."
    },
    david: {
        title: "David and Goliath",
        content: "Young David faced the giant Goliath with just a sling and a stone, trusting in God's power to deliver Israel from the Philistines."
    }
};

// Show Home section
function showHome() {
    document.getElementById('home').classList.remove('d-none');
    document.getElementById('stories').classList.add('d-none');
    document.getElementById('story-detail').classList.add('d-none');
}

// Show Stories section
function showStories() {
    document.getElementById('home').classList.add('d-none');
    document.getElementById('stories').classList.remove('d-none');
    document.getElementById('story-detail').classList.add('d-none');
}

// Show Story Detail section
function showStory(key) {
    const story = stories[key];
    document.getElementById('story-title').textContent = story.title;
    document.getElementById('story-content').textContent = story.content;
    document.getElementById('home').classList.add('d-none');
    document.getElementById('stories').classList.add('d-none');
    document.getElementById('story-detail').classList.remove('d-none');
}

// Initialize with Home
showHome();
