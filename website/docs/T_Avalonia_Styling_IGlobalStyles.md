# IGlobalStyles Interface


Defines the style host that provides styles global to the application.



## Definition
**Namespace:** <a href="N_Avalonia_Styling">Avalonia.Styling</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public interface IGlobalStyles : IStyleHost
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Interface IGlobalStyles
	Inherits IStyleHost
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type IGlobalStyles = 
    interface
        interface IStyleHost
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Styling/IGlobalStyles.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Implements</strong></td><td><a href="T_Avalonia_Styling_IStyleHost">IStyleHost</a></td></tr>
</table>



## Properties
<table>
<tr>
<td><a href="P_Avalonia_Styling_IStyleHost_IsStylesInitialized">IsStylesInitialized</a></td>
<td>Gets a value indicating whether <a href="P_Avalonia_Styling_IStyleHost_Styles">Styles</a> is initialized.<br />(Inherited from <a href="T_Avalonia_Styling_IStyleHost">IStyleHost</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Styling_IStyleHost_Styles">Styles</a></td>
<td>Gets the styles for the element.<br />(Inherited from <a href="T_Avalonia_Styling_IStyleHost">IStyleHost</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Styling_IStyleHost_StylingParent">StylingParent</a></td>
<td>Gets the parent style host element.<br />(Inherited from <a href="T_Avalonia_Styling_IStyleHost">IStyleHost</a>)</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Styling_IStyleHost_StylesAdded">StylesAdded(IReadOnlyList(IStyle))</a></td>
<td>Called when styles are added to <a href="P_Avalonia_Styling_IStyleHost_Styles">Styles</a> or a nested styles collection.<br />(Inherited from <a href="T_Avalonia_Styling_IStyleHost">IStyleHost</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Styling_IStyleHost_StylesRemoved">StylesRemoved(IReadOnlyList(IStyle))</a></td>
<td>Called when styles are removed from <a href="P_Avalonia_Styling_IStyleHost_Styles">Styles</a> or a nested styles collection.<br />(Inherited from <a href="T_Avalonia_Styling_IStyleHost">IStyleHost</a>)</td>
</tr>
</table>

## Events
<table>
<tr>
<td><a href="E_Avalonia_Styling_IGlobalStyles_GlobalStylesAdded">GlobalStylesAdded</a></td>
<td>Raised when styles are added to <a href="T_Avalonia_Styling_Styles">Styles</a> or a nested styles collection.</td>
</tr>
<tr>
<td><a href="E_Avalonia_Styling_IGlobalStyles_GlobalStylesRemoved">GlobalStylesRemoved</a></td>
<td>Raised when styles are removed from <a href="T_Avalonia_Styling_Styles">Styles</a> or a nested styles collection.</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Styling">Avalonia.Styling Namespace</a>  
