# GlobalStylesRemoved Event


Raised when styles are removed from <a href="T_Avalonia_Styling_Styles">Styles</a> or a nested styles collection.



## Definition
**Namespace:** <a href="N_Avalonia_Styling">Avalonia.Styling</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
event Action<IReadOnlyList<IStyle>> GlobalStylesRemoved
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Event GlobalStylesRemoved As Action(Of IReadOnlyList(Of IStyle))
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract GlobalStylesRemoved : IEvent<Action<IReadOnlyList<IStyle>>,
    EventArgs>
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Styling/IGlobalStyles.cs" title="View the source code">View Source</a>



#### Value
<a href="https://learn.microsoft.com/dotnet/api/system.action-1" target="_blank" rel="noopener noreferrer">Action</a>(<a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist-1" target="_blank" rel="noopener noreferrer">IReadOnlyList</a>(<a href="T_Avalonia_Styling_IStyle">IStyle</a>))

## See Also


#### Reference
<a href="T_Avalonia_Styling_IGlobalStyles">IGlobalStyles Interface</a>  
<a href="N_Avalonia_Styling">Avalonia.Styling Namespace</a>  
