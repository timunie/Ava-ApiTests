import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# UrlsOpened Event
:::warning[Obsolete]

Note: This API is now obsolete.

:::





## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
[ObsoleteAttribute("Use Application.Current.TryGetFeature<IActivatableLifetime>() instead.")]
public event EventHandler<UrlOpenedEventArgs> UrlsOpened
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
<ObsoleteAttribute("Use Application.Current.TryGetFeature<IActivatableLifetime>() instead.")>
Public Event UrlsOpened As EventHandler(Of UrlOpenedEventArgs)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<ObsoleteAttribute("Use Application.Current.TryGetFeature<IActivatableLifetime>() instead.")>]
member UrlsOpened : IEvent<EventHandler<UrlOpenedEventArgs>,
    UrlOpenedEventArgs>
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/srcAvalonia.Controls/Application.cs" title="View the source code">View Source</a>



#### Value
<a href="https://learn.microsoft.com/dotnet/api/system.eventhandler-1" target="_blank" rel="noopener noreferrer">EventHandler</a>(<a href="T_Avalonia_UrlOpenedEventArgs">UrlOpenedEventArgs</a>)

## See Also


#### Reference
<a href="T_Avalonia_Application">Application Class</a>  
<a href="N_Avalonia">Avalonia Namespace</a>  
