# ISetInheritanceParent Interface


Defines an interface through which a <a href="T_Avalonia_StyledElement">StyledElement</a>'s inheritance parent can be set.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
[NotClientImplementableAttribute]
public interface ISetInheritanceParent
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
<NotClientImplementableAttribute>
Public Interface ISetInheritanceParent
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<NotClientImplementableAttribute>]
type ISetInheritanceParent = interface end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Controls/ISetInheritanceParent.cs" title="View the source code">View Source</a>

You should not usually need to use this interface - it is for advanced scenarios only. Additionally, <a href="T_Avalonia_Controls_ISetLogicalParent">ISetLogicalParent</a> also sets the inheritance parent; this interface is only needed where the logical and inheritance parents differ.

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Controls_ISetInheritanceParent_SetParent">SetParent(AvaloniaObject)</a></td>
<td>Sets the control's inheritance parent.</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  

