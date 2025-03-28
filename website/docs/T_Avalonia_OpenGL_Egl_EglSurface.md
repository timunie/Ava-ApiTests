# EglSurface Class




## Definition
**Namespace:** <a href="N_Avalonia_OpenGL_Egl">Avalonia.OpenGL.Egl</a>  
**Assembly:** Avalonia.OpenGL (in Avalonia.OpenGL.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public class EglSurface : SafeHandle
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Class EglSurface
	Inherits SafeHandle
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type EglSurface = 
    class
        inherit SafeHandle
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.OpenGL/Egl/EglSurface.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  <a href="https://learn.microsoft.com/dotnet/api/system.runtime.constrainedexecution.criticalfinalizerobject" target="_blank" rel="noopener noreferrer">CriticalFinalizerObject</a>  →  <a href="https://learn.microsoft.com/dotnet/api/system.runtime.interopservices.safehandle" target="_blank" rel="noopener noreferrer">SafeHandle</a>  →  EglSurface</td></tr>
</table>



## Constructors
<table>
<tr>
<td><a href="M_Avalonia_OpenGL_Egl_EglSurface__ctor">EglSurface(EglDisplay, IntPtr)</a></td>
<td>Initializes a new instance of the EglSurface class</td>
</tr>
</table>

## Properties
<table>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.runtime.interopservices.safehandle.isclosed" target="_blank" rel="noopener noreferrer">IsClosed</a></td>
<td>Gets a value indicating whether the handle is closed.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.runtime.interopservices.safehandle" target="_blank" rel="noopener noreferrer">SafeHandle</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_OpenGL_Egl_EglSurface_IsInvalid">IsInvalid</a></td>
<td><br />(Overrides <a href="https://learn.microsoft.com/dotnet/api/system.runtime.interopservices.safehandle.isinvalid" target="_blank" rel="noopener noreferrer">SafeHandle.IsInvalid</a>)</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.runtime.interopservices.safehandle.close" target="_blank" rel="noopener noreferrer">Close()</a></td>
<td>Marks the handle for releasing and freeing resources.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.runtime.interopservices.safehandle" target="_blank" rel="noopener noreferrer">SafeHandle</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.runtime.interopservices.safehandle.dangerousaddref" target="_blank" rel="noopener noreferrer">DangerousAddRef(Boolean)</a></td>
<td>Manually increments the reference counter on <a href="https://learn.microsoft.com/dotnet/api/system.runtime.interopservices.safehandle" target="_blank" rel="noopener noreferrer">SafeHandle</a> instances.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.runtime.interopservices.safehandle" target="_blank" rel="noopener noreferrer">SafeHandle</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.runtime.interopservices.safehandle.dangerousgethandle" target="_blank" rel="noopener noreferrer">DangerousGetHandle()</a></td>
<td>Returns the value of the <a href="https://learn.microsoft.com/dotnet/api/system.runtime.interopservices.safehandle.handle" target="_blank" rel="noopener noreferrer">handle</a> field.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.runtime.interopservices.safehandle" target="_blank" rel="noopener noreferrer">SafeHandle</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.runtime.interopservices.safehandle.dangerousrelease" target="_blank" rel="noopener noreferrer">DangerousRelease()</a></td>
<td>Manually decrements the reference counter on a <a href="https://learn.microsoft.com/dotnet/api/system.runtime.interopservices.safehandle" target="_blank" rel="noopener noreferrer">SafeHandle</a> instance.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.runtime.interopservices.safehandle" target="_blank" rel="noopener noreferrer">SafeHandle</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.runtime.interopservices.safehandle.dispose#system-runtime-interopservices-safehandle-dispose" target="_blank" rel="noopener noreferrer">Dispose()</a></td>
<td>Releases all resources used by the <a href="https://learn.microsoft.com/dotnet/api/system.runtime.interopservices.safehandle" target="_blank" rel="noopener noreferrer">SafeHandle</a> class.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.runtime.interopservices.safehandle" target="_blank" rel="noopener noreferrer">SafeHandle</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.runtime.interopservices.safehandle.dispose#system-runtime-interopservices-safehandle-dispose(system-boolean)" target="_blank" rel="noopener noreferrer">Dispose(Boolean)</a></td>
<td>Releases the unmanaged resources used by the <a href="https://learn.microsoft.com/dotnet/api/system.runtime.interopservices.safehandle" target="_blank" rel="noopener noreferrer">SafeHandle</a> class specifying whether to perform a normal dispose operation.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.runtime.interopservices.safehandle" target="_blank" rel="noopener noreferrer">SafeHandle</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)" target="_blank" rel="noopener noreferrer">Equals(Object)</a></td>
<td>Determines whether the specified object is equal to the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.runtime.interopservices.safehandle.finalize" target="_blank" rel="noopener noreferrer">Finalize()</a></td>
<td>Frees all resources associated with the handle.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.runtime.interopservices.safehandle" target="_blank" rel="noopener noreferrer">SafeHandle</a>)</td>
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
<td><a href="M_Avalonia_OpenGL_Egl_EglSurface_ReleaseHandle">ReleaseHandle()</a></td>
<td><br />(Overrides <a href="https://learn.microsoft.com/dotnet/api/system.runtime.interopservices.safehandle.releasehandle" target="_blank" rel="noopener noreferrer">SafeHandle.ReleaseHandle()</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.runtime.interopservices.safehandle.sethandle" target="_blank" rel="noopener noreferrer">SetHandle(IntPtr)</a></td>
<td>Sets the handle to the specified pre-existing handle.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.runtime.interopservices.safehandle" target="_blank" rel="noopener noreferrer">SafeHandle</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.runtime.interopservices.safehandle.sethandleasinvalid" target="_blank" rel="noopener noreferrer">SetHandleAsInvalid()</a></td>
<td>Marks a handle as no longer used.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.runtime.interopservices.safehandle" target="_blank" rel="noopener noreferrer">SafeHandle</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_OpenGL_Egl_EglSurface_SwapBuffers">SwapBuffers()</a></td>
<td> </td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.tostring" target="_blank" rel="noopener noreferrer">ToString()</a></td>
<td>Returns a string that represents the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
</table>

## Fields
<table>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.runtime.interopservices.safehandle.handle" target="_blank" rel="noopener noreferrer">handle</a></td>
<td>Specifies the handle to be wrapped.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.runtime.interopservices.safehandle" target="_blank" rel="noopener noreferrer">SafeHandle</a>)</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_OpenGL_Egl">Avalonia.OpenGL.Egl Namespace</a>  

