---
layout: post
title: Barcelona open data
date: '2015-04-18T11:38:00.000+01:00'
author: Xavi
tags:
- Coding
modified_time: '2015-04-23T22:06:49.034+01:00'
---

![](http://www.barcelona.cat/assets/images/brand/banner/2015/logo_ajuntament_640.png)

Barcelona has opened its data and it can now be found in this
[opendata link](http://opendata.bcn.cat/opendata/en/). We can find a lot of
interesting stuff, from traffic incidents reported by the local police to live
data of the public bicycle service.

Since this is really exciting I've decided to have a look at some of the data
about cars age per district trying to find some trend depending on the income.
So the following [R code](http://www.r-project.org/) will process
the csv file obtained for [2013](http://opendata.bcn.cat/opendata/en/descarrega-fitxer?url=http%3a%2f%2fbismartopendata.blob.core.windows.net%2fopendata%2fopendata%2f2013_tipologiatipo2013.csv&amp;name=tipologiatipo2013.cs).
I've analyzed five districts (Sant Andreu, Trinitat Nova, Trinitat Vella,
Sant Gervasi and Pedralbes). They are intentionally selected so that there is
an economical gap between them.

```{r}
getDades <- function(filename, barri) {
  veh = read.csv(filename, header=TRUE, sep=";", dec=",")
  h = veh[veh['Barris'] == barri][4:16]
  h = as.numeric(gsub("\\.", "", h))
  total = sum(h)
  n = "MenysDUnAny;UnAny;DosAnys;TresAnys;QuatreAnys;CincAnys;SisAnys;SetAnys;VuitAnys;NouAnys;DeuAnys;MesDeDeu;NC"
  names = strsplit(n, ";")[[1]]
  return(h / total)
}
```

Then we can use that function on each district:

```{r}
dadesStAndreu = getDades("~/Downloads/antiguitat-veh2013.csv", "60. Sant Andreu")
dadesStGervasi = getDades("~/Downloads/antiguitat-veh2013.csv", "25. Sant Gervasi - la Bonanova")
dadesTrinitatNova = getDades("~/Downloads/antiguitat-veh2013.csv", "53. la Trinitat Nova")
dadesTrinitatVella = getDades("~/Downloads/antiguitat-veh2013.csv", "57. la Trinitat Vella")
dadesPedralbes = getDades("~/Downloads/antiguitat-veh2013.csv", "21. Pedralbes")
par(las=2)
MAX=0.6
barplot(dadesTrinitatVella, horiz=TRUE, names.arg=names, cex.names=0.6, cex.axis=0.7, xlim=c(0.0, MAX))
title(main="Trinitat Vella", xlab="Percentage")
barplot(dadesTrinitatNova, horiz=TRUE, names.arg=names, cex.names=0.6, cex.axis=0.7, xlim=c(0.0, MAX))
title(main="Trinitat Nova", xlab="Percentage")
barplot(dadesStAndreu, horiz=TRUE, names.arg=names, cex.names=0.6, cex.axis=0.7, xlim=c(0.0, MAX))
title(main="Sant Andreu", xlab="Percentage")
barplot(dadesStGervasi, horiz=TRUE, names.arg=names, cex.names=0.6, cex.axis=0.7, xlim=c(0.0, MAX))
title(main="Sant Gervasi", xlab="Percentage")
barplot(dadesPedralbes, horiz=TRUE, names.arg=names, cex.names=0.6, cex.axis=0.7, xlim=c(0.0, MAX))
title(main="Pedralbes", xlab="Percentage")
data = matrix(c(dadesTrinitatVella, dadesTrinitatNova, dadesStAndreu, dadesStGervasi, dadesPedralbes), byrow=TRUE, ncol=length(dadesTrinitatNova), nrow=5)
barplot(data, horiz=TRUE, names.arg=names, cex.names=0.6, cex.axis=0.7, xlim=c(0.0, MAX), beside=TRUE, legend.text=c("dadesTrinitatVella", "dadesTrinitatNova", "dadesStAndreu", "dadesStGervasi", "dadesPedralbes"), args.legend=list(x = "bottomright"))
title(main="Per barri", xlab="Percentage")
```

If you execute this code you will obtain the following figure. Interestingly
enough, Pedralbes is one of the richest districts in Barcelona and it has
the highest percentage of cars aged 10 years or more, even more than the least
favored districts like Trinitat Nova y Vella.

![guest-list]({{ "/assets/posts/images/perbarri.jpg" | absolute_url }})
