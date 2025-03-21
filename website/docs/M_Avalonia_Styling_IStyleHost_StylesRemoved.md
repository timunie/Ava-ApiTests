# StylesRemoved Method


Called when styles are removed from <a href="P_Avalonia_Styling_IStyleHost_Styles">Styles</a> or a nested styles collection.



## Definition
**Namespace:** <a href="N_Avalonia_Styling">Avalonia.Styling</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
void StylesRemoved(
	IReadOnlyList<IStyle> styles
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Sub StylesRemoved ( 
	styles As IReadOnlyList(Of IStyle)
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract StylesRemoved : 
        styles : IReadOnlyList<IStyle> -> unit 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Styling/IStyleHost.cs" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist-1" target="_blank" rel="noopener noreferrer">IReadOnlyList</a>(<a href="T_Avalonia_Styling_IStyle">IStyle</a>)</dt><dd>The removed styles.</dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Styling_IStyleHost">IStyleHost Interface</a>  
<a href="N_Avalonia_Styling">Avalonia.Styling Namespace</a>  

