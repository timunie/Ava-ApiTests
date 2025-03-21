# EglDisplay Class




## Definition
**Namespace:** <a href="N_Avalonia_OpenGL_Egl">Avalonia.OpenGL.Egl</a>  
**Assembly:** Avalonia.OpenGL (in Avalonia.OpenGL.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public class EglDisplay : IDisposable
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Class EglDisplay
	Implements IDisposable
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type EglDisplay = 
    class
        interface IDisposable
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.OpenGL/Egl/EglDisplay.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  EglDisplay</td></tr>
<tr><td><strong>Implements</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.idisposable" target="_blank" rel="noopener noreferrer">IDisposable</a></td></tr>
</table>



## Constructors
<table>
<tr>
<td><a href="M_Avalonia_OpenGL_Egl_EglDisplay__ctor">EglDisplay()</a></td>
<td>Initializes a new instance of the EglDisplay class</td>
</tr>
<tr>
<td><a href="M_Avalonia_OpenGL_Egl_EglDisplay__ctor_1">EglDisplay(EglDisplayCreationOptions)</a></td>
<td>Initializes a new instance of the EglDisplay class</td>
</tr>
<tr>
<td><a href="M_Avalonia_OpenGL_Egl_EglDisplay__ctor_2">EglDisplay(IntPtr, EglDisplayOptions)</a></td>
<td>Initializes a new instance of the EglDisplay class</td>
</tr>
</table>

## Properties
<table>
<tr>
<td><a href="P_Avalonia_OpenGL_Egl_EglDisplay_Config">Config</a></td>
<td> </td>
</tr>
<tr>
<td><a href="P_Avalonia_OpenGL_Egl_EglDisplay_DisplayLockIsSharedWithContexts">DisplayLockIsSharedWithContexts</a></td>
<td> </td>
</tr>
<tr>
<td><a href="P_Avalonia_OpenGL_Egl_EglDisplay_EglInterface">EglInterface</a></td>
<td> </td>
</tr>
<tr>
<td><a href="P_Avalonia_OpenGL_Egl_EglDisplay_Handle">Handle</a></td>
<td> </td>
</tr>
<tr>
<td><a href="P_Avalonia_OpenGL_Egl_EglDisplay_IsLost">IsLost</a></td>
<td> </td>
</tr>
<tr>
<td><a href="P_Avalonia_OpenGL_Egl_EglDisplay_SupportsSharing">SupportsSharing</a></td>
<td> </td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_OpenGL_Egl_EglDisplay_CreateContext">CreateContext(EglContextOptions)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_OpenGL_Egl_EglDisplay_CreatePBufferFromClientBuffer">CreatePBufferFromClientBuffer(Int32, IntPtr, Int32[])</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_OpenGL_Egl_EglDisplay_CreatePBufferFromClientBuffer_1">CreatePBufferFromClientBuffer(Int32, IntPtr, Int32*)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_OpenGL_Egl_EglDisplay_CreateWindowSurface">CreateWindowSurface(IntPtr)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_OpenGL_Egl_EglDisplay_Dispose">Dispose()</a></td>
<td>Releases all resources used by the EglDisplay</td>
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
<td><a href="M_Avalonia_OpenGL_Egl_EglDisplay_Lock">Lock()</a></td>
<td> </td>
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

