# IRenderTarget Interface


Defines a render target



## Definition
**Namespace:** <a href="N_Avalonia_Platform">Avalonia.Platform</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public interface IRenderTarget : IDisposable
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Interface IRenderTarget
	Inherits IDisposable
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type IRenderTarget = 
    interface
        interface IDisposable
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Platform/IRenderTarget.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Implements</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.idisposable" target="_blank" rel="noopener noreferrer">IDisposable</a></td></tr>
</table>

The interface used for obtaining drawing context from surfaces you can render on.

## Properties
<table>
<tr>
<td><a href="P_Avalonia_Platform_IRenderTarget_IsCorrupted">IsCorrupted</a></td>
<td>Indicates if the render target is no longer usable and needs to be recreated</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Platform_IRenderTarget_CreateDrawingContext">CreateDrawingContext(Boolean)</a></td>
<td>Creates an <a href="T_Avalonia_Platform_IDrawingContextImpl">IDrawingContextImpl</a> for a rendering session.</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.idisposable.dispose" target="_blank" rel="noopener noreferrer">Dispose()</a></td>
<td>Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.idisposable" target="_blank" rel="noopener noreferrer">IDisposable</a>)</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Platform">Avalonia.Platform Namespace</a>  
