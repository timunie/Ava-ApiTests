# FromNativeUtf8GetProcAddress Method




## Definition
**Namespace:** <a href="N_Avalonia_OpenGL">Avalonia.OpenGL</a>  
**Assembly:** Avalonia.OpenGL (in Avalonia.OpenGL.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static GlInterface FromNativeUtf8GetProcAddress(
	GlVersion version,
	Func<IntPtr, IntPtr> getProcAddress
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Shared Function FromNativeUtf8GetProcAddress ( 
	version As GlVersion,
	getProcAddress As Func(Of IntPtr, IntPtr)
) As GlInterface
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
static member FromNativeUtf8GetProcAddress : 
        version : GlVersion * 
        getProcAddress : Func<IntPtr, IntPtr> -> GlInterface 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.OpenGL/GlInterface.cs#L385" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_OpenGL_GlVersion">GlVersion</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.func-2" target="_blank" rel="noopener noreferrer">Func</a>(<a href="https://learn.microsoft.com/dotnet/api/system.intptr" target="_blank" rel="noopener noreferrer">IntPtr</a>, <a href="https://learn.microsoft.com/dotnet/api/system.intptr" target="_blank" rel="noopener noreferrer">IntPtr</a>)</dt><dd> </dd></dl>

#### Return Value
<a href="T_Avalonia_OpenGL_GlInterface">GlInterface</a>

## See Also


#### Reference
<a href="T_Avalonia_OpenGL_GlInterface">GlInterface Class</a>  
<a href="N_Avalonia_OpenGL">Avalonia.OpenGL Namespace</a>  

