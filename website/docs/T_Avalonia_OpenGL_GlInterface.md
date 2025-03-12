# GlInterface Class




## Definition
**Namespace:** <a href="N_Avalonia_OpenGL">Avalonia.OpenGL</a>  
**Assembly:** Avalonia.OpenGL (in Avalonia.OpenGL.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public class GlInterface : GlBasicInfoInterface
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Class GlInterface
	Inherits GlBasicInfoInterface
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type GlInterface = 
    class
        inherit GlBasicInfoInterface
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.OpenGL/GlInterface.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  <a href="T_Avalonia_OpenGL_GlBasicInfoInterface">GlBasicInfoInterface</a>  →  GlInterface</td></tr>
</table>



## Constructors
<table>
<tr>
<td><a href="M_Avalonia_OpenGL_GlInterface__ctor">GlInterface(GlVersion, Func(String, IntPtr))</a></td>
<td>Initializes a new instance of the GlInterface class</td>
</tr>
</table>

## Properties
<table>
<tr>
<td><a href="P_Avalonia_OpenGL_GlInterface_ContextInfo">ContextInfo</a></td>
<td> </td>
</tr>
<tr>
<td><a href="P_Avalonia_OpenGL_GlInterface_IsBindVertexArrayAvailable">IsBindVertexArrayAvailable</a></td>
<td> </td>
</tr>
<tr>
<td><a href="P_Avalonia_OpenGL_GlInterface_IsBlitFramebufferAvailable">IsBlitFramebufferAvailable</a></td>
<td> </td>
</tr>
<tr>
<td><a href="P_Avalonia_OpenGL_GlInterface_IsDeleteVertexArraysAvailable">IsDeleteVertexArraysAvailable</a></td>
<td> </td>
</tr>
<tr>
<td><a href="P_Avalonia_OpenGL_GlInterface_IsGenVertexArraysAvailable">IsGenVertexArraysAvailable</a></td>
<td> </td>
</tr>
<tr>
<td><a href="P_Avalonia_OpenGL_GlInterface_Renderer">Renderer</a></td>
<td> </td>
</tr>
<tr>
<td><a href="P_Avalonia_OpenGL_GlInterface_Vendor">Vendor</a></td>
<td> </td>
</tr>
<tr>
<td><a href="P_Avalonia_OpenGL_GlInterface_Version">Version</a></td>
<td> </td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_OpenGL_GlInterface_ActiveTexture">ActiveTexture(Int32)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_OpenGL_GlInterface_AttachShader">AttachShader(Int32, Int32)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_OpenGL_GlInterface_BindAttribLocation">BindAttribLocation(Int32, Int32, IntPtr)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_OpenGL_GlInterface_BindAttribLocationString">BindAttribLocationString(Int32, Int32, String)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_OpenGL_GlInterface_BindBuffer">BindBuffer(Int32, Int32)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_OpenGL_GlInterface_BindFramebuffer">BindFramebuffer(Int32, Int32)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_OpenGL_GlInterface_BindRenderbuffer">BindRenderbuffer(Int32, Int32)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_OpenGL_GlInterface_BindTexture">BindTexture(Int32, Int32)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_OpenGL_GlInterface_BindVertexArray">BindVertexArray(Int32)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_OpenGL_GlInterface_BlitFramebuffer">BlitFramebuffer(Int32, Int32, Int32, Int32, Int32, Int32, Int32, Int32, Int32, Int32)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_OpenGL_GlInterface_BufferData">BufferData(Int32, IntPtr, IntPtr, Int32)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_OpenGL_GlInterface_CheckFramebufferStatus">CheckFramebufferStatus(Int32)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_OpenGL_GlInterface_Clear">Clear(Int32)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_OpenGL_GlInterface_ClearColor">ClearColor(Single, Single, Single, Single)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_OpenGL_GlInterface_ClearDepth">ClearDepth(Single)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_OpenGL_GlInterface_ClearStencil">ClearStencil(Int32)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_OpenGL_GlInterface_CompileShader">CompileShader(Int32)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_OpenGL_GlInterface_CompileShaderAndGetError">CompileShaderAndGetError(Int32, String)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_OpenGL_GlInterface_CopyTexSubImage2D">CopyTexSubImage2D(Int32, Int32, Int32, Int32, Int32, Int32, Int32, Int32)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_OpenGL_GlInterface_CreateProgram">CreateProgram()</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_OpenGL_GlInterface_CreateShader">CreateShader(Int32)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_OpenGL_GlInterface_DeleteBuffer">DeleteBuffer(Int32)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_OpenGL_GlInterface_DeleteBuffers">DeleteBuffers(Int32, Int32*)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_OpenGL_GlInterface_DeleteFramebuffer">DeleteFramebuffer(Int32)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_OpenGL_GlInterface_DeleteFramebuffers">DeleteFramebuffers(Int32, Int32*)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_OpenGL_GlInterface_DeleteProgram">DeleteProgram(Int32)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_OpenGL_GlInterface_DeleteRenderbuffer">DeleteRenderbuffer(Int32)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_OpenGL_GlInterface_DeleteRenderbuffers">DeleteRenderbuffers(Int32, Int32*)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_OpenGL_GlInterface_DeleteShader">DeleteShader(Int32)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_OpenGL_GlInterface_DeleteTexture">DeleteTexture(Int32)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_OpenGL_GlInterface_DeleteTextures">DeleteTextures(Int32, Int32*)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_OpenGL_GlInterface_DeleteVertexArray">DeleteVertexArray(Int32)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_OpenGL_GlInterface_DeleteVertexArrays">DeleteVertexArrays(Int32, Int32*)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_OpenGL_GlInterface_DepthFunc">DepthFunc(Int32)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_OpenGL_GlInterface_DepthMask">DepthMask(Int32)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_OpenGL_GlInterface_Disable">Disable(Int32)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_OpenGL_GlInterface_DrawArrays">DrawArrays(Int32, Int32, IntPtr)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_OpenGL_GlInterface_DrawElements">DrawElements(Int32, Int32, Int32, IntPtr)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_OpenGL_GlInterface_Enable">Enable(Int32)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_OpenGL_GlInterface_EnableVertexAttribArray">EnableVertexAttribArray(Int32)</a></td>
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
<td><a href="M_Avalonia_OpenGL_GlInterface_Finish">Finish()</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_OpenGL_GlInterface_Flush">Flush()</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_OpenGL_GlInterface_FramebufferRenderbuffer">FramebufferRenderbuffer(Int32, Int32, Int32, Int32)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_OpenGL_GlInterface_FramebufferTexture2D">FramebufferTexture2D(Int32, Int32, Int32, Int32, Int32)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_OpenGL_GlInterface_FromNativeUtf8GetProcAddress">FromNativeUtf8GetProcAddress(GlVersion, Func(IntPtr, IntPtr))</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_OpenGL_GlInterface_GenBuffer">GenBuffer()</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_OpenGL_GlInterface_GenBuffers">GenBuffers(Int32, Int32*)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_OpenGL_GlInterface_GenFramebuffer">GenFramebuffer()</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_OpenGL_GlInterface_GenFramebuffers">GenFramebuffers(Int32, Int32*)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_OpenGL_GlInterface_GenRenderbuffer">GenRenderbuffer()</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_OpenGL_GlInterface_GenRenderbuffers">GenRenderbuffers(Int32, Int32*)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_OpenGL_GlInterface_GenTexture">GenTexture()</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_OpenGL_GlInterface_GenTextures">GenTextures(Int32, Int32*)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_OpenGL_GlInterface_GenVertexArray">GenVertexArray()</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_OpenGL_GlInterface_GenVertexArrays">GenVertexArrays(Int32, Int32*)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_OpenGL_GlInterface_GetAttribLocation">GetAttribLocation(Int32, IntPtr)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_OpenGL_GlInterface_GetAttribLocationString">GetAttribLocationString(Int32, String)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_OpenGL_GlBasicInfoInterface_GetError">GetError()</a></td>
<td><br />(Inherited from <a href="T_Avalonia_OpenGL_GlBasicInfoInterface">GlBasicInfoInterface</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_OpenGL_GlBasicInfoInterface_GetExtensions">GetExtensions()</a></td>
<td><br />(Inherited from <a href="T_Avalonia_OpenGL_GlBasicInfoInterface">GlBasicInfoInterface</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_OpenGL_GlBasicInfoInterface_GetFloatv">GetFloatv(Int32, Single)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_OpenGL_GlBasicInfoInterface">GlBasicInfoInterface</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gethashcode" target="_blank" rel="noopener noreferrer">GetHashCode()</a></td>
<td>Serves as the default hash function.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_OpenGL_GlBasicInfoInterface_GetIntegerv">GetIntegerv(Int32, Int32)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_OpenGL_GlBasicInfoInterface">GlBasicInfoInterface</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_OpenGL_GlInterface_GetProcAddress">GetProcAddress(String)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_OpenGL_GlInterface_GetProgramInfoLog">GetProgramInfoLog(Int32, Int32, Int32, Void*)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_OpenGL_GlInterface_GetProgramiv">GetProgramiv(Int32, Int32, Int32*)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_OpenGL_GlInterface_GetRenderbufferParameteriv">GetRenderbufferParameteriv(Int32, Int32, Int32)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_OpenGL_GlInterface_GetShaderInfoLog">GetShaderInfoLog(Int32, Int32, Int32, Void*)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_OpenGL_GlInterface_GetShaderiv">GetShaderiv(Int32, Int32, Int32*)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_OpenGL_GlBasicInfoInterface_GetString_1">GetString(Int32)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_OpenGL_GlBasicInfoInterface">GlBasicInfoInterface</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_OpenGL_GlBasicInfoInterface_GetString">GetString(Int32, Int32)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_OpenGL_GlBasicInfoInterface">GlBasicInfoInterface</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_OpenGL_GlBasicInfoInterface_GetStringiNative">GetStringiNative(Int32, Int32)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_OpenGL_GlBasicInfoInterface">GlBasicInfoInterface</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_OpenGL_GlBasicInfoInterface_GetStringNative">GetStringNative(Int32)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_OpenGL_GlBasicInfoInterface">GlBasicInfoInterface</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gettype" target="_blank" rel="noopener noreferrer">GetType()</a></td>
<td>Gets the <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a> of the current instance.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_OpenGL_GlInterface_GetUniformLocation">GetUniformLocation(Int32, IntPtr)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_OpenGL_GlInterface_GetUniformLocationString">GetUniformLocationString(Int32, String)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_OpenGL_GlInterface_LinkProgram">LinkProgram(Int32)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_OpenGL_GlInterface_LinkProgramAndGetError">LinkProgramAndGetError(Int32)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone" target="_blank" rel="noopener noreferrer">MemberwiseClone()</a></td>
<td>Creates a shallow copy of the current <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_OpenGL_GlInterface_RenderbufferStorage">RenderbufferStorage(Int32, Int32, Int32, Int32)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_OpenGL_GlInterface_ShaderSource">ShaderSource(Int32, Int32, IntPtr, IntPtr)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_OpenGL_GlInterface_ShaderSourceString">ShaderSourceString(Int32, String)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_OpenGL_GlInterface_TexImage2D">TexImage2D(Int32, Int32, Int32, Int32, Int32, Int32, Int32, Int32, IntPtr)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_OpenGL_GlInterface_TexParameteri">TexParameteri(Int32, Int32, Int32)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.tostring" target="_blank" rel="noopener noreferrer">ToString()</a></td>
<td>Returns a string that represents the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_OpenGL_GlInterface_Uniform1f">Uniform1f(Int32, Single)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_OpenGL_GlInterface_UniformMatrix4fv">UniformMatrix4fv(Int32, Int32, Boolean, Void*)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_OpenGL_GlInterface_UseProgram">UseProgram(Int32)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_OpenGL_GlInterface_VertexAttribPointer">VertexAttribPointer(Int32, Int32, Int32, Int32, Int32, IntPtr)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_OpenGL_GlInterface_Viewport">Viewport(Int32, Int32, Int32, Int32)</a></td>
<td> </td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_OpenGL">Avalonia.OpenGL Namespace</a>  

