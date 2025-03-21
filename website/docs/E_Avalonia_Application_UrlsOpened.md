# UrlsOpened Event
<span>
:::warning[Obsolete]

Note: This API is now obsolete.

:::

</span>



## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll)

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



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/Application.cs" title="View the source code">View Source</a>



#### Value
<a href="https://learn.microsoft.com/dotnet/api/system.eventhandler-1" target="_blank" rel="noopener noreferrer">EventHandler</a>(<a href="T_Avalonia_UrlOpenedEventArgs">UrlOpenedEventArgs</a>)

## See Also


#### Reference
<a href="T_Avalonia_Application">Application Class</a>  
<a href="N_Avalonia">Avalonia Namespace</a>  

