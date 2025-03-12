# ICustomDrawOperation Interface




## Definition
**Namespace:** <a href="N_Avalonia_Rendering_SceneGraph">Avalonia.Rendering.SceneGraph</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public interface ICustomDrawOperation : IEquatable<ICustomDrawOperation>, 
	IDisposable
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Interface ICustomDrawOperation
	Inherits IEquatable(Of ICustomDrawOperation), IDisposable
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type ICustomDrawOperation = 
    interface
        interface IEquatable<ICustomDrawOperation>
        interface IDisposable
    end
```
</TabItem>
</Tabs>

<table>
<tr><td><strong>Implements</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.idisposable" target="_blank" rel="noopener noreferrer">IDisposable</a>, <a href="https://learn.microsoft.com/dotnet/api/system.iequatable-1" target="_blank" rel="noopener noreferrer">IEquatable</a>(ICustomDrawOperation)</td></tr>
</table>



## Properties
<table>
<tr>
<td><a href="P_Avalonia_Rendering_SceneGraph_ICustomDrawOperation_Bounds">Bounds</a></td>
<td>Gets the bounds of the visible content in the node in global coordinates.</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.idisposable.dispose" target="_blank" rel="noopener noreferrer">Dispose()</a></td>
<td>Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.idisposable" target="_blank" rel="noopener noreferrer">IDisposable</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.iequatable-1.equals" target="_blank" rel="noopener noreferrer">Equals(T)</a></td>
<td>Indicates whether the current object is equal to another object of the same type.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.iequatable-1" target="_blank" rel="noopener noreferrer">IEquatable</a>(ICustomDrawOperation))</td>
</tr>
<tr>
<td><a href="M_Avalonia_Rendering_SceneGraph_ICustomDrawOperation_HitTest">HitTest(Point)</a></td>
<td>Hit test the geometry in this node.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Rendering_SceneGraph_ICustomDrawOperation_Render">Render(ImmediateDrawingContext)</a></td>
<td>Renders the node to a drawing context.</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Rendering_SceneGraph">Avalonia.Rendering.SceneGraph Namespace</a>  

