# FbdevOutput Class




## Definition
**Namespace:** <a href="N_Avalonia_LinuxFramebuffer">Avalonia.LinuxFramebuffer</a>  
**Assembly:** Avalonia.LinuxFramebuffer (in Avalonia.LinuxFramebuffer.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public sealed class FbdevOutput : IFramebufferPlatformSurface, 
	IDisposable, IOutputBackend
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public NotInheritable Class FbdevOutput
	Implements IFramebufferPlatformSurface, IDisposable, IOutputBackend
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<SealedAttribute>]
type FbdevOutput = 
    class
        interface IFramebufferPlatformSurface
        interface IDisposable
        interface IOutputBackend
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Linux/Avalonia.LinuxFramebuffer/Output/FbdevOutput.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  FbdevOutput</td></tr>
<tr><td><strong>Implements</strong></td><td><a href="T_Avalonia_Controls_Platform_Surfaces_IFramebufferPlatformSurface">IFramebufferPlatformSurface</a>, <a href="T_Avalonia_LinuxFramebuffer_Output_IOutputBackend">IOutputBackend</a>, <a href="https://learn.microsoft.com/dotnet/api/system.idisposable" target="_blank" rel="noopener noreferrer">IDisposable</a></td></tr>
</table>



## Constructors
<table>
<tr>
<td><a href="M_Avalonia_LinuxFramebuffer_FbdevOutput__ctor">FbdevOutput(FbDevOutputOptions)</a></td>
<td>Create a Linux frame buffer device output</td>
</tr>
<tr>
<td><a href="M_Avalonia_LinuxFramebuffer_FbdevOutput__ctor_2">FbdevOutput(String)</a></td>
<td>Create a Linux frame buffer device output</td>
</tr>
<tr>
<td><a href="M_Avalonia_LinuxFramebuffer_FbdevOutput__ctor_1">FbdevOutput(String, Nullable(PixelFormat))</a></td>
<td>Create a Linux frame buffer device output</td>
</tr>
</table>

## Properties
<table>
<tr>
<td><a href="P_Avalonia_LinuxFramebuffer_FbdevOutput_Id">Id</a></td>
<td> </td>
</tr>
<tr>
<td><a href="P_Avalonia_LinuxFramebuffer_FbdevOutput_PixelSize">PixelSize</a></td>
<td> </td>
</tr>
<tr>
<td><a href="P_Avalonia_LinuxFramebuffer_FbdevOutput_Scaling">Scaling</a></td>
<td> </td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_LinuxFramebuffer_FbdevOutput_CreateFramebufferRenderTarget">CreateFramebufferRenderTarget()</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_LinuxFramebuffer_FbdevOutput_Dispose">Dispose()</a></td>
<td>Releases all resources used by the FbdevOutput</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)" target="_blank" rel="noopener noreferrer">Equals(Object)</a></td>
<td>Determines whether the specified object is equal to the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_LinuxFramebuffer_FbdevOutput_Finalize">Finalize()</a></td>
<td><br />(Overrides <a href="https://learn.microsoft.com/dotnet/api/system.object.finalize" target="_blank" rel="noopener noreferrer">Object.Finalize()</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gethashcode" target="_blank" rel="noopener noreferrer">GetHashCode()</a></td>
<td>Serves as the default hash function.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gettype" target="_blank" rel="noopener noreferrer">GetType()</a></td>
<td>Gets the <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a> of the current instance.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_LinuxFramebuffer_FbdevOutput_Lock">Lock()</a></td>
<td> </td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.tostring" target="_blank" rel="noopener noreferrer">ToString()</a></td>
<td>Returns a string that represents the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_LinuxFramebuffer">Avalonia.LinuxFramebuffer Namespace</a>  
