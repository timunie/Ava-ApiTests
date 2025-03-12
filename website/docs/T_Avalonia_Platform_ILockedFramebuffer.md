# ILockedFramebuffer Interface




## Definition
**Namespace:** <a href="N_Avalonia_Platform">Avalonia.Platform</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public interface ILockedFramebuffer : IDisposable
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Interface ILockedFramebuffer
	Inherits IDisposable
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type ILockedFramebuffer = 
    interface
        interface IDisposable
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Platform/ILockedFramebuffer.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Implements</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.idisposable" target="_blank" rel="noopener noreferrer">IDisposable</a></td></tr>
</table>



## Properties
<table>
<tr>
<td><a href="P_Avalonia_Platform_ILockedFramebuffer_Address">Address</a></td>
<td>Address of the first pixel</td>
</tr>
<tr>
<td><a href="P_Avalonia_Platform_ILockedFramebuffer_Dpi">Dpi</a></td>
<td>DPI of underling screen</td>
</tr>
<tr>
<td><a href="P_Avalonia_Platform_ILockedFramebuffer_Format">Format</a></td>
<td>Pixel format</td>
</tr>
<tr>
<td><a href="P_Avalonia_Platform_ILockedFramebuffer_RowBytes">RowBytes</a></td>
<td>Number of bytes per row</td>
</tr>
<tr>
<td><a href="P_Avalonia_Platform_ILockedFramebuffer_Size">Size</a></td>
<td>Gets the framebuffer size in device pixels.</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.idisposable.dispose" target="_blank" rel="noopener noreferrer">Dispose()</a></td>
<td>Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.idisposable" target="_blank" rel="noopener noreferrer">IDisposable</a>)</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Platform">Avalonia.Platform Namespace</a>  

