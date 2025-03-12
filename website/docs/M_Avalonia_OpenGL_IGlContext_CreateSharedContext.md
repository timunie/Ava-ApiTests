# CreateSharedContext Method




## Definition
**Namespace:** <a href="N_Avalonia_OpenGL">Avalonia.OpenGL</a>  
**Assembly:** Avalonia.OpenGL (in Avalonia.OpenGL.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
IGlContext? CreateSharedContext(
	IEnumerable<GlVersion>? preferredVersions = null
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Function CreateSharedContext ( 
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
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.OpenGL/IGlContext.cs" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1" target="_blank" rel="noopener noreferrer">IEnumerable</a>(<a href="T_Avalonia_OpenGL_GlVersion">GlVersion</a>)  (Optional)</dt><dd> </dd></dl>

#### Return Value
<a href="T_Avalonia_OpenGL_IGlContext">IGlContext</a>

## See Also


#### Reference
<a href="T_Avalonia_OpenGL_IGlContext">IGlContext Interface</a>  
<a href="N_Avalonia_OpenGL">Avalonia.OpenGL Namespace</a>  

