# IRenderTargetWithProperties Interface




## Definition
**Namespace:** <a href="N_Avalonia_Platform">Avalonia.Platform</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public interface IRenderTargetWithProperties : IRenderTarget, 
	IDisposable
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Interface IRenderTargetWithProperties
	Inherits IRenderTarget, IDisposable
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type IRenderTargetWithProperties = 
    interface
        interface IRenderTarget
        interface IDisposable
    end
```
</TabItem>
</Tabs>

<table>
<tr><td><strong>Implements</strong></td><td><a href="T_Avalonia_Platform_IRenderTarget">IRenderTarget</a>, <a href="https://learn.microsoft.com/dotnet/api/system.idisposable" target="_blank" rel="noopener noreferrer">IDisposable</a></td></tr>
</table>



## Properties
<table>
<tr>
<td><a href="P_Avalonia_Platform_IRenderTarget_IsCorrupted">IsCorrupted</a></td>
<td>Indicates if the render target is no longer usable and needs to be recreated<br />(Inherited from <a href="T_Avalonia_Platform_IRenderTarget">IRenderTarget</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Platform_IRenderTargetWithProperties_Properties">Properties</a></td>
<td> </td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Platform_IRenderTarget_CreateDrawingContext">CreateDrawingContext(Boolean)</a></td>
<td>Creates an <a href="T_Avalonia_Platform_IDrawingContextImpl">IDrawingContextImpl</a> for a rendering session.<br />(Inherited from <a href="T_Avalonia_Platform_IRenderTarget">IRenderTarget</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_IRenderTargetWithProperties_CreateDrawingContext">CreateDrawingContext(Boolean, RenderTargetDrawingContextProperties)</a></td>
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
