# IStyle Interface


Defines the interface for styles.



## Definition
**Namespace:** <a href="N_Avalonia_Styling">Avalonia.Styling</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
[NotClientImplementableAttribute]
public interface IStyle : IResourceNode
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
<NotClientImplementableAttribute>
Public Interface IStyle
	Inherits IResourceNode
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<NotClientImplementableAttribute>]
type IStyle = 
    interface
        interface IResourceNode
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Styling/IStyle.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Implements</strong></td><td><a href="T_Avalonia_Controls_IResourceNode">IResourceNode</a></td></tr>
</table>



## Properties
<table>
<tr>
<td><a href="P_Avalonia_Styling_IStyle_Children">Children</a></td>
<td>Gets a collection of child styles.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_IResourceNode_HasResources">HasResources</a></td>
<td>Gets a value indicating whether the object has resources.<br />(Inherited from <a href="T_Avalonia_Controls_IResourceNode">IResourceNode</a>)</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Controls_IResourceNode_TryGetResource">TryGetResource(Object, ThemeVariant, Object)</a></td>
<td>Tries to find a resource within the object.<br />(Inherited from <a href="T_Avalonia_Controls_IResourceNode">IResourceNode</a>)</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Styling">Avalonia.Styling Namespace</a>  

