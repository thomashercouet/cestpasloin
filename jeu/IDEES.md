# Idées de jeux

## Plus Haut : Flipper (à retravailler, coup de cœur)

Prototype jouable : onglet **Flipper** (version épurée) et **Flipper+** (version chargée) de `jeu/plus-haut.html`.

Direction retenue (inspirée de Flappy Bird) : un seul geste, un score en mètres (1 étage = 3 m, écart constant à l'écran),
la bille meurt quand elle sort par le bas de l'écran, relance instantanée, ligne « TON RECORD » dans le décor.
Les éléments arrivent un par un en montant ; la difficulté est indexée sur le numéro d'étage.
Types d'étages (tirés au sort, introduits progressivement) : classique, décalé, asymétrique (dès l'étage 3),
plot au-dessus du trou (4), mobile (6), court (9). Bumpers dès l'étage 1, tremplins dès l'étage 8.

Plan : 1. cœur sec (fait) · 2. paliers visuels (fait) · 3. oiseaux (dès 45 m, dévient la bille) et bulles
(dès 75 m, +1 étage) (fait). Prochaines idées : nuage d'orage qui pousse la bille, satellites dans l'espace,
défi quotidien, réglage du ressenti au doigt.

Paliers : la rue (0 m), les toits de Paris (15), le grand ciel (45), les nuages (90), le coucher de soleil (150),
la haute atmosphère (250), l'espace (400). Bannière à chaque palier, jauge à gauche, repères dessinés en silhouette
(sommet aligné sur leur vraie altitude), ville au sol en deux plans, nuages, planètes.

Ce qui existe :
- Étages de flippers empilés, un seul geste (maintenir = flippers levés).
- Rampes et flippers traversables par en dessous ; une bille ratée retombe à l'étage inférieur.
- Bumpers, cibles par 3 (multiplicateur ×2 à ×5, perdu si on retombe), tremplins (+3 étages),
  sauveur de bille (5 s au départ, recharge 10 s via pastille).
- Score en points = mètres gagnés × multiplicateur. Repères d'altitude réels (Tour Eiffel, etc.).

Pistes pour la suite :
- Régler le ressenti au doigt (force des flippers, gravité, écart entre étages) sur téléphone.
- Thèmes par tranche d'altitude (ville, nuages, espace) avec éléments de table différents.
- Missions courtes (« abats 3 groupes de cibles », « atteins l'étage 10 sans tomber »).
- Défi quotidien avec graine fixe, fantôme de sa meilleure partie.
- Version widget : relance instantanée, partie < 60 s.

## Solitaire But Now It Has Been Turned Into A Roguelite Too Because Why The Hell Not

Prototype : `jeu/solitaire-roguelite.html`. Parodie de Balatro sur le Solitaire de Windows 95.
