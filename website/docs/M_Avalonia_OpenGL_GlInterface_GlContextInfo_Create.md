# Create Method




## Definition
**Namespace:** <a href="N_Avalonia_OpenGL">Avalonia.OpenGL</a>  
**Assembly:** Avalonia.OpenGL (in Avalonia.OpenGL.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static GlInterface.GlContextInfo Create(
	GlVersion version,
	Func<string, IntPtr> getProcAddress
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Shared Function Create ( 
	version As GlVersion,
	getProcAddress As Func(Of String, IntPtr)
) As GlInterface.GlContextInfo
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
static member Create : 
        version : GlVersion * 
        getProcAddress : Func<string, IntPtr> -> GlInterface.GlContextInfo 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.OpenGL/GlInterface.cs#L32" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_OpenGL_GlVersion">GlVersion</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.func-2" target="_blank" rel="noopener noreferrer">Func</a>(<a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a>, <a href="https://learn.microsoft.com/dotnet/api/system.intptr" target="_blank" rel="noopener noreferrer">IntPtr</a>)</dt><dd> </dd></dl>

#### Return Value
<a href="T_Avalonia_OpenGL_GlInterface_GlContextInfo">GlInterface.GlContextInfo</a>

## See Also


#### Reference
<a href="T_Avalonia_OpenGL_GlInterface_GlContextInfo">GlInterface.GlContextInfo Class</a>  
<a href="N_Avalonia_OpenGL">Avalonia.OpenGL Namespace</a>  

