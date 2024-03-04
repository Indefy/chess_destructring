const chessIcons = {
    king : '♚',
    queen : '♛',
    rook : '♜',
    knight : '♞',
    bishop : '♝',
    pawn : '♟️',
}

const chessPiecesHashMap = {
    0 : null, // empty cell
    1 : {'white|king' : chessIcons.king},
    2 : {'white|queen' : chessIcons.queen},
    3 : {'white|knight': chessIcons.knight},
    4 : {'white|bishop': chessIcons.bishop},
    5 : {'white|rook' : chessIcons.rook},
    6 : {'white|pawn' : chessIcons.pawn},
    7 : {'black|king' : chessIcons.king},
    8 : {'black|queen' : chessIcons.queen},
    9 : {'black|knight': chessIcons.knight},
    10 : {'black|bishop': chessIcons.bishop},
    11 : {'black|rook' : chessIcons.rook},
    12 : {'black|pawn' : chessIcons.pawn},
}

function getPieceDetails(number) {
    return new Promise((resolve, reject) => {
        if (arguments.length !== 1 || typeof number !== 'number' || !Number.isInteger(number) || number < 0 || number > 12) {
            reject(new Error('The function getPieceDetails expects a single integer between 0 and 12'));
        } else {
            const { [number]: pieceDetails } = chessPiecesHashMap;
            if (number === 0) {
                resolve({ index: 0, color: null, name: null, icon: null });
            } else {
                const [key, icon] = Object.entries(pieceDetails)[0];
                const [color, name] = key.split('|');
                resolve({ index: number, color, name, icon });
            }
        }
    });
}
getPieceDetails(2)
    .then(pieceDetails => {
        console.log(pieceDetails);
    })
    .catch(error => {
        console.error(error.message);
    });

// If index key was 0 >>> The function getPieceDetails expects a single integer between 0 and 12
//  When index key is 2 promted >>> { index: 2, color: 'white', name: 'queen', icon: '♛' }


