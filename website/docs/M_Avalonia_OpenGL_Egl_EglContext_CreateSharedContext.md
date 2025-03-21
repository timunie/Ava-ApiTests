# CreateSharedContext Method




## Definition
**Namespace:** <a href="N_Avalonia_OpenGL_Egl">Avalonia.OpenGL.Egl</a>  
**Assembly:** Avalonia.OpenGL (in Avalonia.OpenGL.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public IGlContext CreateSharedContext(
	IEnumerable<GlVersion>? preferredVersions = null
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Function CreateSharedContext ( 
	Optional preferredVersions As IEnumerable(Of GlVersion) = Nothing
) As IGlContext
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract CreateSharedContext : 
        ?preferredVersions : IEnumerable<GlVersion> 
(* Defaults:
        let _preferredVersions = defaultArg preferredVersions null
*)
-> IGlContext 
override CreateSharedContext : 
        ?preferredVersions : IEnumerable<GlVersion> 
(* Defaults:
        let _preferredVersions = defaultArg preferredVersions null
*)
-> IGlContext 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.OpenGL/Egl/EglContext.cs#L152" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1" target="_blank" rel="noopener noreferrer">IEnumerable</a>(<a href="T_Avalonia_OpenGL_GlVersion">GlVersion</a>)  (Optional)</dt><dd> </dd></dl>

#### Return Value
<a href="T_Avalonia_OpenGL_IGlContext">IGlContext</a>

#### Implements
<a href="M_Avalonia_OpenGL_IGlContext_CreateSharedContext">IGlContext.CreateSharedContext(IEnumerable(GlVersion))</a>  


## See Also


#### Reference
<a href="T_Avalonia_OpenGL_Egl_EglContext">EglContext Class</a>  
<a href="N_Avalonia_OpenGL_Egl">Avalonia.OpenGL.Egl Namespace</a>  

