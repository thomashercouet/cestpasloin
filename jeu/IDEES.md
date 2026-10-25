# Idées de jeux

## Plus Haut : Flipper (à retravailler, coup de cœur)

Prototype jouable : onglet **Flipper** (version épurée) et **Flipper+** (version chargée) de `jeu/plus-haut.html`.

Direction retenue (inspirée de Flappy Bird) : un seul geste, un score en mètres, on perd au premier étage raté,
relance instantanée, ligne « TON RECORD » dans le décor. Les éléments arrivent un par un en montant.

Plan : 1. cœur sec (fait) · 2. paliers visuels par altitude (ville, nuages, espace) et repères dessinés ·
3. oiseau et bulle introduits progressivement.

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
