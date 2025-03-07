# IStyleHost Interface


Defines an element that has a <a href="P_Avalonia_Styling_IStyleHost_Styles">Styles</a> collection.



## Definition
**Namespace:** <a href="N_Avalonia_Styling">Avalonia.Styling</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public interface IStyleHost
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Interface IStyleHost
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type IStyleHost = interface end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Styling/IStyleHost.cs" title="View the source code">View Source</a>



## Properties
<table>
<tr>
<td><a href="P_Avalonia_Styling_IStyleHost_IsStylesInitialized">IsStylesInitialized</a></td>
<td>Gets a value indicating whether <a href="P_Avalonia_Styling_IStyleHost_Styles">Styles</a> is initialized.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Styling_IStyleHost_Styles">Styles</a></td>
<td>Gets the styles for the element.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Styling_IStyleHost_StylingParent">StylingParent</a></td>
<td>Gets the parent style host element.</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Styling_IStyleHost_StylesAdded">StylesAdded(IReadOnlyList(IStyle))</a></td>
<td>Called when styles are added to <a href="P_Avalonia_Styling_IStyleHost_Styles">Styles</a> or a nested styles collection.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Styling_IStyleHost_StylesRemoved">StylesRemoved(IReadOnlyList(IStyle))</a></td>
<td>Called when styles are removed from <a href="P_Avalonia_Styling_IStyleHost_Styles">Styles</a> or a nested styles collection.</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Styling">Avalonia.Styling Namespace</a>  
