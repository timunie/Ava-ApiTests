---
title:UrlsOpened Event
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# UrlsOpened Event
<blockquote><strong>Note: This API is now obsolete.</strong></blockquote>




## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.4

**C#**
``` C#
[ObsoleteAttribute("Use Application.Current.TryGetFeature<IActivatableLifetime>() instead.")]
public event EventHandler<UrlOpenedEventArgs> UrlsOpened
```
**VB**
``` VB
<ObsoleteAttribute("Use Application.Current.TryGetFeature<IActivatableLifetime>() instead.")>
Public Event UrlsOpened As EventHandler(Of UrlOpenedEventArgs)
```
**F#**
``` F#
[<ObsoleteAttribute("Use Application.Current.TryGetFeature<IActivatableLifetime>() instead.")>]
member UrlsOpened : IEvent<EventHandler<UrlOpenedEventArgs>,
    UrlOpenedEventArgs>
```



#### Value
<a href="https://learn.microsoft.com/dotnet/api/system.eventhandler-1" target="_blank" rel="noopener noreferrer">EventHandler</a>(<a href="T_Avalonia_UrlOpenedEventArgs">UrlOpenedEventArgs</a>)

## See Also


#### Reference
<a href="T_Avalonia_Application">Application Class</a>  
<a href="N_Avalonia">Avalonia Namespace</a>  
