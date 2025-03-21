# EglInterface Class




## Definition
**Namespace:** <a href="N_Avalonia_OpenGL_Egl">Avalonia.OpenGL.Egl</a>  
**Assembly:** Avalonia.OpenGL (in Avalonia.OpenGL.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public class EglInterface
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Class EglInterface
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type EglInterface = class end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.OpenGL/Egl/EglInterface.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  EglInterface</td></tr>
</table>



## Constructors
<table>
<tr>
<td><a href="M_Avalonia_OpenGL_Egl_EglInterface__ctor">EglInterface()</a></td>
<td>Initializes a new instance of the EglInterface class</td>
</tr>
<tr>
<td><a href="M_Avalonia_OpenGL_Egl_EglInterface__ctor_1">EglInterface(Func(String, IntPtr))</a></td>
<td>Initializes a new instance of the EglInterface class</td>
</tr>
<tr>
<td><a href="M_Avalonia_OpenGL_Egl_EglInterface__ctor_2">EglInterface(String)</a></td>
<td>Initializes a new instance of the EglInterface class</td>
</tr>
</table>

## Properties
<table>
<tr>
<td><a href="P_Avalonia_OpenGL_Egl_EglInterface_IsGetPlatformDisplayExtAvailable">IsGetPlatformDisplayExtAvailable</a></td>
<td> </td>
</tr>
<tr>
<td><a href="P_Avalonia_OpenGL_Egl_EglInterface_IsQueryDeviceAttribExtAvailable">IsQueryDeviceAttribExtAvailable</a></td>
<td> </td>
</tr>
<tr>
<td><a href="P_Avalonia_OpenGL_Egl_EglInterface_IsQueryDisplayAttribExtAvailable">IsQueryDisplayAttribExtAvailable</a></td>
<td> </td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_OpenGL_Egl_EglInterface_BindApi">BindApi(Int32)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_OpenGL_Egl_EglInterface_BindTexImage">BindTexImage(IntPtr, IntPtr, Int32)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_OpenGL_Egl_EglInterface_ChooseConfig">ChooseConfig(IntPtr, Int32[], IntPtr, Int32, Int32)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_OpenGL_Egl_EglInterface_CreateContext">CreateContext(IntPtr, IntPtr, IntPtr, Int32[])</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_OpenGL_Egl_EglInterface_CreatePbufferFromClientBuffer">CreatePbufferFromClientBuffer(IntPtr, Int32, IntPtr, IntPtr, Int32[])</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_OpenGL_Egl_EglInterface_CreatePbufferFromClientBufferPtr">CreatePbufferFromClientBufferPtr(IntPtr, Int32, IntPtr, IntPtr, Int32*)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_OpenGL_Egl_EglInterface_CreatePBufferSurface">CreatePBufferSurface(IntPtr, IntPtr, Int32[])</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_OpenGL_Egl_EglInterface_CreateWindowSurface">CreateWindowSurface(IntPtr, IntPtr, IntPtr, Int32[])</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_OpenGL_Egl_EglInterface_DestroyContext">DestroyContext(IntPtr, IntPtr)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_OpenGL_Egl_EglInterface_DestroySurface">DestroySurface(IntPtr, IntPtr)</a></td>
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
<td><a href="M_Avalonia_OpenGL_Egl_EglInterface_GetConfigAttrib">GetConfigAttrib(IntPtr, IntPtr, Int32, Int32)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_OpenGL_Egl_EglInterface_GetCurrentContext">GetCurrentContext()</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_OpenGL_Egl_EglInterface_GetCurrentDisplay">GetCurrentDisplay()</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_OpenGL_Egl_EglInterface_GetCurrentSurface">GetCurrentSurface(Int32)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_OpenGL_Egl_EglInterface_GetDisplay">GetDisplay(IntPtr)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_OpenGL_Egl_EglInterface_GetError">GetError()</a></td>
<td> </td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gethashcode" target="_blank" rel="noopener noreferrer">GetHashCode()</a></td>
<td>Serves as the default hash function.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_OpenGL_Egl_EglInterface_GetPlatformDisplayExt">GetPlatformDisplayExt(Int32, IntPtr, Int32[])</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_OpenGL_Egl_EglInterface_GetProcAddress">GetProcAddress(IntPtr)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gettype" target="_blank" rel="noopener noreferrer">GetType()</a></td>
<td>Gets the <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a> of the current instance.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_OpenGL_Egl_EglInterface_Initialize">Initialize(IntPtr, Int32, Int32)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_OpenGL_Egl_EglInterface_MakeCurrent">MakeCurrent(IntPtr, IntPtr, IntPtr, IntPtr)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone" target="_blank" rel="noopener noreferrer">MemberwiseClone()</a></td>
<td>Creates a shallow copy of the current <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_OpenGL_Egl_EglInterface_QueryDeviceAttribExt">QueryDeviceAttribExt(IntPtr, Int32, IntPtr)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_OpenGL_Egl_EglInterface_QueryDisplayAttribExt">QueryDisplayAttribExt(IntPtr, Int32, IntPtr)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_OpenGL_Egl_EglInterface_QueryString">QueryString(IntPtr, Int32)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_OpenGL_Egl_EglInterface_QueryStringNative">QueryStringNative(IntPtr, Int32)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_OpenGL_Egl_EglInterface_SwapBuffers">SwapBuffers(IntPtr, IntPtr)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_OpenGL_Egl_EglInterface_Terminate">Terminate(IntPtr)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.tostring" target="_blank" rel="noopener noreferrer">ToString()</a></td>
<td>Returns a string that represents the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_OpenGL_Egl_EglInterface_WaitClient">WaitClient()</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_OpenGL_Egl_EglInterface_WaitGL">WaitGL()</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_OpenGL_Egl_EglInterface_WaitNative">WaitNative(Int32)</a></td>
<td> </td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_OpenGL_Egl">Avalonia.OpenGL.Egl Namespace</a>  

