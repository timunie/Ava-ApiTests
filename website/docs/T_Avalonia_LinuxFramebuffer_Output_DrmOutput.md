# DrmOutput Class




## Definition
**Namespace:** <a href="N_Avalonia_LinuxFramebuffer_Output">Avalonia.LinuxFramebuffer.Output</a>  
**Assembly:** Avalonia.LinuxFramebuffer (in Avalonia.LinuxFramebuffer.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public class DrmOutput : IGlOutputBackend, IOutputBackend, 
	IGlPlatformSurface
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Class DrmOutput
	Implements IGlOutputBackend, IOutputBackend, IGlPlatformSurface
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type DrmOutput = 
    class
        interface IGlOutputBackend
        interface IOutputBackend
        interface IGlPlatformSurface
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Linux/Avalonia.LinuxFramebuffer/Output/DrmOutput.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  DrmOutput</td></tr>
<tr><td><strong>Implements</strong></td><td><a href="T_Avalonia_LinuxFramebuffer_Output_IGlOutputBackend">IGlOutputBackend</a>, <a href="T_Avalonia_LinuxFramebuffer_Output_IOutputBackend">IOutputBackend</a>, <a href="T_Avalonia_OpenGL_Surfaces_IGlPlatformSurface">IGlPlatformSurface</a></td></tr>
</table>



## Constructors
<table>
<tr>
<td><a href="M_Avalonia_LinuxFramebuffer_Output_DrmOutput__ctor_2">DrmOutput(DrmCard, Boolean, DrmOutputOptions)</a></td>
<td>Initializes a new instance of the DrmOutput class</td>
</tr>
<tr>
<td><a href="M_Avalonia_LinuxFramebuffer_Output_DrmOutput__ctor_3">DrmOutput(String, Boolean, DrmOutputOptions)</a></td>
<td>Initializes a new instance of the DrmOutput class</td>
</tr>
<tr>
<td><a href="M_Avalonia_LinuxFramebuffer_Output_DrmOutput__ctor_1">DrmOutput(DrmCard, DrmResources, DrmConnector, DrmModeInfo)</a></td>
<td>Initializes a new instance of the DrmOutput class</td>
</tr>
<tr>
<td><a href="M_Avalonia_LinuxFramebuffer_Output_DrmOutput__ctor">DrmOutput(DrmCard, DrmResources, DrmConnector, DrmModeInfo, DrmOutputOptions)</a></td>
<td>Initializes a new instance of the DrmOutput class</td>
</tr>
</table>

## Properties
<table>
<tr>
<td><a href="P_Avalonia_LinuxFramebuffer_Output_DrmOutput_PixelSize">PixelSize</a></td>
<td> </td>
</tr>
<tr>
<td><a href="P_Avalonia_LinuxFramebuffer_Output_DrmOutput_PlatformGraphics">PlatformGraphics</a></td>
<td> </td>
</tr>
<tr>
<td><a href="P_Avalonia_LinuxFramebuffer_Output_DrmOutput_Scaling">Scaling</a></td>
<td> </td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_LinuxFramebuffer_Output_DrmOutput_CreateContext">CreateContext()</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_LinuxFramebuffer_Output_DrmOutput_CreateGlRenderTarget">CreateGlRenderTarget()</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_LinuxFramebuffer_Output_DrmOutput_CreateGlRenderTarget_1">CreateGlRenderTarget(IGlContext)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)" target="_blank" rel="noopener noreferrer">Equals(Object)</a></td>
<td>Determines whether the specified object is equal to the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.finalize" target="_blank" rel="noopener noreferrer">Finalize()</a></td>
<td>Allows an object to try to free resources and perform other cleanup operations before it is reclaimed by garbage collection.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
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
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone" target="_blank" rel="noopener noreferrer">MemberwiseClone()</a></td>
<td>Creates a shallow copy of the current <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.tostring" target="_blank" rel="noopener noreferrer">ToString()</a></td>
<td>Returns a string that represents the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_LinuxFramebuffer_Output">Avalonia.LinuxFramebuffer.Output Namespace</a>  

