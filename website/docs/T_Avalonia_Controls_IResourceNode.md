# IResourceNode Interface


Represents an object that can be queried for resources.



## Definition
**Namespace:** <a href="N_Avalonia_Controls">Avalonia.Controls</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public interface IResourceNode
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Interface IResourceNode
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type IResourceNode = interface end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Controls/IResourceNode.cs" title="View the source code">View Source</a>

The interface represents a common interface for both controls that host resources (<a href="T_Avalonia_Controls_IResourceHost">IResourceHost</a>) and resource providers such as <a href="T_Avalonia_Controls_ResourceDictionary">ResourceDictionary</a> (see <a href="T_Avalonia_Controls_IResourceProvider">IResourceProvider</a>).

## Properties
<table>
<tr>
<td><a href="P_Avalonia_Controls_IResourceNode_HasResources">HasResources</a></td>
<td>Gets a value indicating whether the object has resources.</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Controls_IResourceNode_TryGetResource">TryGetResource(Object, ThemeVariant, Object)</a></td>
<td>Tries to find a resource within the object.</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Controls">Avalonia.Controls Namespace</a>  
