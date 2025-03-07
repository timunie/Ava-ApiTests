# EglPlatformSurfaceRenderTargetBase Class




## Definition
**Namespace:** <a href="N_Avalonia_OpenGL_Egl">Avalonia.OpenGL.Egl</a>  
**Assembly:** Avalonia.OpenGL (in Avalonia.OpenGL.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public abstract class EglPlatformSurfaceRenderTargetBase : IGlPlatformSurfaceRenderTargetWithCorruptionInfo, 
	IGlPlatformSurfaceRenderTarget, IDisposable
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public MustInherit Class EglPlatformSurfaceRenderTargetBase
	Implements IGlPlatformSurfaceRenderTargetWithCorruptionInfo, IGlPlatformSurfaceRenderTarget, IDisposable
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<AbstractClassAttribute>]
type EglPlatformSurfaceRenderTargetBase = 
    class
        interface IGlPlatformSurfaceRenderTargetWithCorruptionInfo
        interface IGlPlatformSurfaceRenderTarget
        interface IDisposable
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.OpenGL/Egl/EglGlPlatformSurfaceBase.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  EglPlatformSurfaceRenderTargetBase</td></tr>
<tr><td><strong>Implements</strong></td><td><a href="T_Avalonia_OpenGL_Surfaces_IGlPlatformSurfaceRenderTarget">IGlPlatformSurfaceRenderTarget</a>, <a href="T_Avalonia_OpenGL_Surfaces_IGlPlatformSurfaceRenderTargetWithCorruptionInfo">IGlPlatformSurfaceRenderTargetWithCorruptionInfo</a>, <a href="https://learn.microsoft.com/dotnet/api/system.idisposable" target="_blank" rel="noopener noreferrer">IDisposable</a></td></tr>
</table>



## Constructors
<table>
<tr>
<td><a href="M_Avalonia_OpenGL_Egl_EglPlatformSurfaceRenderTargetBase__ctor">EglPlatformSurfaceRenderTargetBase(EglContext)</a></td>
<td>Initializes a new instance of the EglPlatformSurfaceRenderTargetBase class</td>
</tr>
</table>

## Properties
<table>
<tr>
<td><a href="P_Avalonia_OpenGL_Egl_EglPlatformSurfaceRenderTargetBase_Context">Context</a></td>
<td> </td>
</tr>
<tr>
<td><a href="P_Avalonia_OpenGL_Egl_EglPlatformSurfaceRenderTargetBase_IsCorrupted">IsCorrupted</a></td>
<td> </td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_OpenGL_Egl_EglPlatformSurfaceRenderTargetBase_BeginDraw">BeginDraw()</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_OpenGL_Egl_EglPlatformSurfaceRenderTargetBase_BeginDraw_1">BeginDraw(EglSurface, PixelSize, Double, Action, Boolean)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_OpenGL_Egl_EglPlatformSurfaceRenderTargetBase_BeginDrawCore">BeginDrawCore()</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_OpenGL_Egl_EglPlatformSurfaceRenderTargetBase_Dispose">Dispose()</a></td>
<td>Releases all resources used by the EglPlatformSurfaceRenderTargetBase</td>
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
<a href="N_Avalonia_OpenGL_Egl">Avalonia.OpenGL.Egl Namespace</a>  
