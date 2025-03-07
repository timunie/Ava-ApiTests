# IStyleable Interface
<span>
:::warning[Obsolete]

Note: This API is now obsolete.

:::

</span>

Interface for styleable elements.



## Definition
**Namespace:** <a href="N_Avalonia_Styling">Avalonia.Styling</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
[ObsoleteAttribute("This interface may be removed in 12.0. Use StyledElement, or override StyledElement.StyleKeyOverride to override the StyleKey for a class.")]
public interface IStyleable : INamed
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
<ObsoleteAttribute("This interface may be removed in 12.0. Use StyledElement, or override StyledElement.StyleKeyOverride to override the StyleKey for a class.")>
Public Interface IStyleable
	Inherits INamed
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<ObsoleteAttribute("This interface may be removed in 12.0. Use StyledElement, or override StyledElement.StyleKeyOverride to override the StyleKey for a class.")>]
type IStyleable = 
    interface
        interface INamed
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Styling/IStyleable.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Implements</strong></td><td><a href="T_Avalonia_INamed">INamed</a></td></tr>
</table>



## Properties
<table>
<tr>
<td><a href="P_Avalonia_Styling_IStyleable_Classes">Classes</a></td>
<td>Gets the list of classes for the control.</td>
</tr>
<tr>
<td><a href="P_Avalonia_INamed_Name">Name</a></td>
<td>Gets the element name.<br />(Inherited from <a href="T_Avalonia_INamed">INamed</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Styling_IStyleable_StyleKey">StyleKey</a></td>
<td>Gets the type by which the control is styled.<br />Obsolete.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Styling_IStyleable_TemplatedParent">TemplatedParent</a></td>
<td>Gets the template parent of this element if the control comes from a template.</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Styling">Avalonia.Styling Namespace</a>  
