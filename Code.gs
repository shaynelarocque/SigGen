function doGet(e) {
    return HtmlService.createHtmlOutputFromFile('Index.html');
}

function getSignature(userInputs) {
    var signature = '';
    switch (userInputs.template) {
        case 'template1':
            signature = createTemplate1Signature(userInputs);
            break;
        case 'template2':
            signature = createTemplate2Signature(userInputs);
            break;
        case 'template3':
            signature = createTemplate3Signature(userInputs);
            break;
        case 'template4':
            signature = createTemplate4Signature(userInputs);
            break;
        case 'template5':
            signature = createTemplate5Signature(userInputs);
            break;
        case 'template6':
            signature = createTemplate6Signature(userInputs);
            break;
        default:
            signature = "Template not found.";
            break;
    }
    return signature;
}

function createTemplate1Signature(userInputs) {
    var pronounsHtml = userInputs.pronouns ? `<span style="border-left: 0.75px solid;padding-left: 6px; font-size: 12px; color: #8E8E8E; font-weight: 100; font-style: normal;"> (${userInputs.pronouns})</span>` : '';
    var templateHtml = `
<!DOCTYPE html>
<html>
<head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Archivo:wght@100;300;500;700&display=swap" rel="stylesheet">
</head>
<body>
    <table style="font-family: 'Archivo', Tahoma, sans-serif; color: #8E8E8E; font-size: 10.5px;">
        <tbody>
            <tr>
                <td rowspan="6" style="text-align: center; vertical-align: middle; border-right: 1.5px solid #8E8E8E;">
                    <!-- Replace with your own image URL -->
                    <a href="#CompanyURL"><img src="#CompanyLogoURL" style="width: auto; height: auto; max-width: 128px;"></a>
                </td>
                <td colspan="4" style="font-size: 15px; color: #364FCA; font-style: italic; font-weight: bold; letter-spacing: -0.75px;">
                    <span style="font-weight:700;">${userInputs.firstName} <span style="#8E8E8E; padding-right: 6px; margin-right: 3px;">${userInputs.lastName}</span></span>
                    ${pronounsHtml}
                </td>
            </tr>
            <tr>
                <td colspan="4" style="text-transform: uppercase; font-weight: 500;">${userInputs.title}</td>
            </tr>
            <tr>
                <td colspan="4" style="font-weight: 300;">${userInputs.email}</td>
            </tr>
            <tr>
                <td colspan="4" style="font-weight: 300;">${userInputs.phone}</td>
            </tr>
            <tr>
                <td colspan="4" style="font-weight: 300;">
                    <!-- Replace with your own social media URLs -->
                    <a href="#LinkedInURL"><img src="#LinkedInImageURL" style="width: 16px; height: 16px; vertical-align: middle;"></a>
                    <a href="#YouTubeURL"><img src="#YouTubeImageURL" style="width: 16px; height: 16px; vertical-align: middle;"></a>
                </td>
            </tr>
        </tbody>
    </table>
</body>
</html>
  `;
    return templateHtml;
}

function createTemplate2Signature(userInputs) {
    var pronounsHtml = userInputs.pronouns ? `<span style="border-left: 0.75px solid;padding-left: 6px; font-size: 12px; color: #8E8E8E; font-weight: 100; font-style: normal;"> (${userInputs.pronouns})</span>` : '';
    var templateHtml = `
<!DOCTYPE html>
<html>
<head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Archivo:wght@100;300;500;700&display=swap" rel="stylesheet">
</head>
<body>
    <table style="font-family: 'Archivo', Tahoma, sans-serif; color: #8E8E8E; font-size: 10.5px;">
        <tbody>
            <tr>
                <td rowspan="6" style="text-align: center; vertical-align: middle; border-right: 1.5px solid #8E8E8E;">
                    <!-- Replace with your own image URL -->
                    <a href="#OrganizationURL"><img src="#OrganizationLogoURL" style="width:auto; height:auto; max-width:128px;padding-right:15px;"></a>
                </td>
                <td colspan="4" style="font-size: 15px; color: #EF4723; font-style: italic; font-weight: bold; letter-spacing: -0.75px;">
                    <span style="font-weight:700;">${userInputs.firstName} <span style="#8E8E8E; padding-right: 6px; margin-right: 3px;">${userInputs.lastName}</span></span>
                    ${pronounsHtml}
                </td>
            </tr>
            <tr>
                <td colspan="4" style="text-transform: uppercase; font-weight: 500;">${userInputs.title}</td>
            </tr>
            <tr>
                <td colspan="4" style="font-weight: 300;">${userInputs.email}</td>
            </tr>
            <tr>
                <td colspan="4" style="font-weight: 300;">${userInputs.phone}</td>
            </tr>
            <tr>
                <td colspan="4" style="font-weight: 300;">
                    <!-- Replace with your own social media URLs -->
                    <a href="#OrganizationSecondURL"><img src="#SecondImageURL" style="height:26px; vertical-align:middle;"></a>
                    <a href="#LinkedInURL"><img src="#LinkedInImageURL" style="width:16px; height:16px; vertical-align:middle;"></a>
                    <a href="#FacebookURL"><img src="#FacebookImageURL" style="width:16px; height:16px; vertical-align:middle;"></a>
                    <a href="#InstagramURL"><img src="#InstagramImageURL" style="width:16px; height:16px; vertical-align:middle;"></a>
                    <a href="#YouTubeURL"><img src="#YouTubeImageURL" style="width:16px; height:16px; vertical-align:middle;"></a>
                </td>
            </tr>
        </tbody>
    </table>
</body>
</html>
  `;
    return templateHtml;
}

function createTemplate5Signature(userInputs) {
    var pronounsHtml = userInputs.pronouns ? `<span style="border-left: 0.75px solid;padding-left: 6px; font-size: 12px; color: #8E8E8E; font-weight: 100; font-style: normal;"> (${userInputs.pronouns})</span>` : '';
    var templateHtml = `
<!DOCTYPE html>
<html>
<head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Archivo:wght@100;300;500;700&display=swap" rel="stylesheet">
</head>
<body>
    <table style="font-family: 'Archivo', Tahoma, sans-serif; color: #8E8E8E; font-size: 10.5px;">
        <tbody>
            <tr>
                <td rowspan="6" style="text-align: center; vertical-align: middle; border-right: 1.5px solid #8E8E8E;">
                    <!-- Replace with your own image URL -->
                    <a href="#OrganizationURL"><img src="#OrganizationLogoURL" style="width:auto; height:auto; max-width:128px;padding-right:5px;"></a>
                </td>
                <td colspan="4" style="font-size: 15px; color: #A15ED1; font-style: italic; font-weight: bold; letter-spacing: -0.75px;">
                    <span style="font-weight:700;">${userInputs.firstName} <span style="#8E8E8E; padding-right: 6px; margin-right: 3px;">${userInputs.lastName}</span></span>
                    ${pronounsHtml}
                </td>
            </tr>
            <tr>
                <td colspan="4" style="text-transform: uppercase; font-weight: 500;">${userInputs.title}</td>
            </tr>
            <tr>
                <td colspan="4" style="font-weight: 300;">${userInputs.email}</td>
            </tr>
            <tr>
                <td colspan="4" style="font-weight: 300;">${userInputs.phone}</td>
            </tr>
            <tr>
                <td colspan="4" style="font-weight: 300;">
                    <!-- Replace with your own social media URLs -->
                    <a href="#AdditionalURL"><img src="#AdditionalImageURL" style="height:26px; vertical-align:middle;"></a>
                    <a href="#LinkedInURL"><img src="#LinkedInImageURL" style="width:16px; height:16px; vertical-align:middle;"></a>
                </td>
            </tr>
        </tbody>
    </table>
</body>
</html>

  `;
    return templateHtml;
}

function createTemplate3Signature(userInputs) {
    var pronounsHtml = userInputs.pronouns ? `<span style="border-left: 0.75px solid;padding-left: 6px; font-size: 12px; color: #8E8E8E; font-weight: 100; font-style: normal;"> (${userInputs.pronouns})</span>` : '';

    var templateHtml = `
<!DOCTYPE html>
<html>
<head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Archivo:wght@100;300;500;700&display=swap" rel="stylesheet">
</head>
<body>
    <table style="font-family: 'Archivo', Tahoma, sans-serif; color: #8E8E8E; font-size: 10.5px;">
        <tbody>
            <tr>
                <td rowspan="6" style="text-align: center; vertical-align: middle; border-right: 1.5px solid #8E8E8E;">
                    <!-- Replace with your own image URL -->
                    <a href="#OrganizationURL"><img src="#OrganizationLogoURL" style="width:auto; height:auto; max-width:128px;padding-right:5px;"></a>
                </td>
                <td colspan="4" style="font-size: 15px; color: #275C49; font-style: italic; font-weight: bold; letter-spacing: -0.75px;">
                    <span style="font-weight:700;">${userInputs.firstName} <span style="#8E8E8E; padding-right: 6px; margin-right: 3px;">${userInputs.lastName}</span></span>
                    ${pronounsHtml}
                </td>
            </tr>
            <tr>
                <td colspan="4" style="text-transform: uppercase; font-weight: 500;">${userInputs.title}</td>
            </tr>
            <tr>
                <td colspan="4" style="font-weight: 300;">${userInputs.email}</td>
            </tr>
            <tr>
                <td colspan="4" style="font-weight: 300;">${userInputs.phone}</td>
            </tr>
            <tr>
                <td colspan="4" style="font-weight: 300;">
                    <!-- Replace with your own social media URLs -->
                    <a href="#AdditionalURL"><img src="#AdditionalImageURL" style="height:26px; vertical-align:middle;"></a>
                    <a href="#LinkedInURL"><img src="#LinkedInImageURL" style="width:16px; height:16px; vertical-align:middle;"></a>
                    <a href="#InstagramURL"><img src="#InstagramImageURL" style="width:16px; height:16px; vertical-align:middle;"></a>
                    <a href="#FacebookURL"><img src="#FacebookImageURL" style="width:16px; height:16px; vertical-align:middle;"></a>
                </td>
            </tr>
        </tbody>
    </table>
</body>
</html>
  `;
    return templateHtml;
}

function createTemplate4Signature(userInputs) {
    var pronounsHtml = userInputs.pronouns ? `<span style="border-left: 0.75px solid;padding-left: 6px; font-size: 12px; color: #8E8E8E; font-weight: 100; font-style: normal;"> (${userInputs.pronouns})</span>` : '';

    var templateHtml = `
<!DOCTYPE html>
<html>
<head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Archivo:wght@100;300;500;700&display=swap" rel="stylesheet">
</head>
<body>
    <table style="font-family: 'Archivo', Tahoma, sans-serif; color: #8E8E8E; font-size: 10.5px;">
        <tbody>
            <tr>
                <td rowspan="6" style="text-align: center; vertical-align: middle; border-right: 1.5px solid #8E8E8E;">
                    <!-- Replace with your own image URL -->
                    <a href="#OrganizationURL"><img src="#OrganizationLogoURL" style="width:auto; height:auto; max-width:128px;padding-right:5px;"></a>
                </td>
                <td colspan="4" style="font-size: 15px; color: #1131A7; font-style: italic; font-weight: bold; letter-spacing: -0.75px;">
                    <span style="font-weight:700;">${userInputs.firstName} <span style="#8E8E8E; padding-right: 6px; margin-right: 3px;">${userInputs.lastName}</span></span>
                    ${pronounsHtml}
                </td>
            </tr>
            <tr>
                <td colspan="4" style="text-transform: uppercase; font-weight: 500;">${userInputs.title}</td>
            </tr>
            <tr>
                <td colspan="4" style="font-weight: 300;">${userInputs.email}</td>
            </tr>
            <tr>
                <td colspan="4" style="font-weight: 300;">${userInputs.phone}</td>
            </tr>
            <tr>
                <td colspan="4" style="font-weight: 300;">
                    <!-- Replace with your own social media URLs -->
                    <a href="#AdditionalURL"><img src="#AdditionalImageURL" style="height:26px; vertical-align:middle;"></a>
                    <a href="#LinkedInURL"><img src="#LinkedInImageURL" style="width:16px; height:16px; vertical-align:middle;"></a>
                </td>
            </tr>
        </tbody>
    </table>
</body>
</html>
  `;
    return templateHtml;
}

function createTemplate6Signature(userInputs) {
    var pronounsHtml = userInputs.pronouns ? `<span style="border-left: 0.75px solid;padding-left: 6px; font-size: 12px; color: #8E8E8E; font-weight: 100; font-style: normal;"> (${userInputs.pronouns})</span>` : '';

    var templateHtml = `
<!DOCTYPE html>
<html>
<head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Archivo:wght@100;300;500;700&display=swap" rel="stylesheet">
</head>
<body>
    <table style="font-family: 'Archivo', Tahoma, sans-serif; color: #8E8E8E; font-size: 10.5px;">
        <tbody>
            <tr>
                <td rowspan="6" style="text-align: center; vertical-align: middle; border-right: 1.5px solid #8E8E8E;">
                    <!-- Replace with your own image URL -->
                    <a href="#OrganizationURL"><img src="#OrganizationLogoURL" style="width:auto; height:auto; max-width:128px;padding-right:5px;"></a>
                </td>
                <td colspan="4" style="font-size: 15px; color: #F1D548; font-style: italic; font-weight: bold; letter-spacing: -0.75px;">
                    <span style="font-weight:700;">${userInputs.firstName} <span style="#8E8E8E; padding-right: 6px; margin-right: 3px;">${userInputs.lastName}</span></span>
                    ${pronounsHtml}
                </td>
            </tr>
            <tr>
                <td colspan="4" style="text-transform: uppercase; font-weight: 500;">${userInputs.title}</td>
            </tr>
            <tr>
                <td colspan="4" style="font-weight: 300;">${userInputs.email}</td>
            </tr>
            <tr>
                <td colspan="4" style="font-weight: 300;">${userInputs.phone}</td>
            </tr>
            <tr>
                <td colspan="4" style="font-weight: 300;">
                    <!-- Replace with your own social media URLs -->
                    <a href="#AdditionalURL"><img src="#AdditionalImageURL" style="height:26px; vertical-align:middle;"></a>
                    <a href="#LinkedInURL"><img src="#LinkedInImageURL" style="width:16px; height:16px; vertical-align:middle;"></a>
                </td>
            </tr>
        </tbody>
    </table>
</body>
</html>
  `;
    return templateHtml;
}
