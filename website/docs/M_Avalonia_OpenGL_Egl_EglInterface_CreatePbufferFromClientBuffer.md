# CreatePbufferFromClientBuffer Method




## Definition
**Namespace:** <a href="N_Avalonia_OpenGL_Egl">Avalonia.OpenGL.Egl</a>  
**Assembly:** Avalonia.OpenGL (in Avalonia.OpenGL.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public IntPtr CreatePbufferFromClientBuffer(
	IntPtr display,
	int buftype,
	IntPtr buffer,
	IntPtr config,
	int[]? attrib_list
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Function CreatePbufferFromClientBuffer ( 
	display As IntPtr,
	buftype As Integer,
	buffer As IntPtr,
	config As IntPtr,
	attrib_list As Integer()
) As IntPtr
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member CreatePbufferFromClientBuffer : 
        display : IntPtr * 
        buftype : int * 
        buffer : IntPtr * 
        config : IntPtr * 
        attrib_list : int[] -> IntPtr 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.OpenGL/obj/Release/net8.0/DevGenerators/Generator.GetProcAddressInitializationGenerator/globalAvalonia.OpenGL.Egl.EglInterface.cs#L190" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.intptr" target="_blank" rel="noopener noreferrer">IntPtr</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.intptr" target="_blank" rel="noopener noreferrer">IntPtr</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.intptr" target="_blank" rel="noopener noreferrer">IntPtr</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a>[]</dt><dd> </dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.intptr" target="_blank" rel="noopener noreferrer">IntPtr</a>

## See Also


#### Reference
<a href="T_Avalonia_OpenGL_Egl_EglInterface">EglInterface Class</a>  
<a href="N_Avalonia_OpenGL_Egl">Avalonia.OpenGL.Egl Namespace</a>  

