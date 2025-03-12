# EglContext Class




## Definition
**Namespace:** <a href="N_Avalonia_OpenGL_Egl">Avalonia.OpenGL.Egl</a>  
**Assembly:** Avalonia.OpenGL (in Avalonia.OpenGL.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public class EglContext : IGlContext, IPlatformGraphicsContext, 
	IDisposable, IOptionalFeatureProvider
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Class EglContext
	Implements IGlContext, IPlatformGraphicsContext, IDisposable, IOptionalFeatureProvider
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type EglContext = 
    class
        interface IGlContext
        interface IPlatformGraphicsContext
        interface IDisposable
        interface IOptionalFeatureProvider
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.OpenGL/Egl/EglContext.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  EglContext</td></tr>
<tr><td><strong>Implements</strong></td><td><a href="T_Avalonia_OpenGL_IGlContext">IGlContext</a>, <a href="T_Avalonia_Platform_IOptionalFeatureProvider">IOptionalFeatureProvider</a>, <a href="T_Avalonia_Platform_IPlatformGraphicsContext">IPlatformGraphicsContext</a>, <a href="https://learn.microsoft.com/dotnet/api/system.idisposable" target="_blank" rel="noopener noreferrer">IDisposable</a></td></tr>
</table>



## Properties
<table>
<tr>
<td><a href="P_Avalonia_OpenGL_Egl_EglContext_CanCreateSharedContext">CanCreateSharedContext</a></td>
<td> </td>
</tr>
<tr>
<td><a href="P_Avalonia_OpenGL_Egl_EglContext_Context">Context</a></td>
<td> </td>
</tr>
<tr>
<td><a href="P_Avalonia_OpenGL_Egl_EglContext_Display">Display</a></td>
<td> </td>
</tr>
<tr>
<td><a href="P_Avalonia_OpenGL_Egl_EglContext_EglInterface">EglInterface</a></td>
<td> </td>
</tr>
<tr>
<td><a href="P_Avalonia_OpenGL_Egl_EglContext_GlInterface">GlInterface</a></td>
<td> </td>
</tr>
<tr>
<td><a href="P_Avalonia_OpenGL_Egl_EglContext_IsCurrent">IsCurrent</a></td>
<td> </td>
</tr>
<tr>
<td><a href="P_Avalonia_OpenGL_Egl_EglContext_IsLost">IsLost</a></td>
<td> </td>
</tr>
<tr>
<td><a href="P_Avalonia_OpenGL_Egl_EglContext_OffscreenSurface">OffscreenSurface</a></td>
<td> </td>
</tr>
<tr>
<td><a href="P_Avalonia_OpenGL_Egl_EglContext_SampleCount">SampleCount</a></td>
<td> </td>
</tr>
<tr>
<td><a href="P_Avalonia_OpenGL_Egl_EglContext_StencilSize">StencilSize</a></td>
<td> </td>
</tr>
<tr>
<td><a href="P_Avalonia_OpenGL_Egl_EglContext_Version">Version</a></td>
<td> </td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_OpenGL_Egl_EglContext_CreateSharedContext">CreateSharedContext(IEnumerable(GlVersion))</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_OpenGL_Egl_EglContext_Dispose">Dispose()</a></td>
<td>Releases all resources used by the EglContext</td>
</tr>
<tr>
<td><a href="M_Avalonia_OpenGL_Egl_EglContext_EnsureCurrent">EnsureCurrent()</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_OpenGL_Egl_EglContext_EnsureLocked">EnsureLocked()</a></td>
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
<td><a href="M_Avalonia_OpenGL_Egl_EglContext_IsSharedWith">IsSharedWith(IGlContext)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_OpenGL_Egl_EglContext_MakeCurrent">MakeCurrent()</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_OpenGL_Egl_EglContext_MakeCurrent_1">MakeCurrent(EglSurface)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone" target="_blank" rel="noopener noreferrer">MemberwiseClone()</a></td>
<td>Creates a shallow copy of the current <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_OpenGL_Egl_EglContext_NotifyContextLost">NotifyContextLost()</a></td>
<td> </td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.tostring" target="_blank" rel="noopener noreferrer">ToString()</a></td>
<td>Returns a string that represents the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_OpenGL_Egl_EglContext_TryGetFeature">TryGetFeature(Type)</a></td>
<td> </td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_OpenGL_Egl">Avalonia.OpenGL.Egl Namespace</a>  

