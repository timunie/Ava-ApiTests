# ChooseConfig Method




## Definition
**Namespace:** <a href="N_Avalonia_OpenGL_Egl">Avalonia.OpenGL.Egl</a>  
**Assembly:** Avalonia.OpenGL (in Avalonia.OpenGL.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public bool ChooseConfig(
	IntPtr display,
	int[] attribs,
	out IntPtr surfaceConfig,
	int numConfigs,
	out int choosenConfig
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Function ChooseConfig ( 
	display As IntPtr,
	attribs As Integer(),
	<OutAttribute> ByRef surfaceConfig As IntPtr,
	numConfigs As Integer,
	<OutAttribute> ByRef choosenConfig As Integer
) As Boolean
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member ChooseConfig : 
        display : IntPtr * 
        attribs : int[] * 
        surfaceConfig : IntPtr byref * 
        numConfigs : int * 
        choosenConfig : int byref -> bool 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.OpenGL/obj/Release/net8.0/DevGenerators/Generator.GetProcAddressInitializationGenerator/globalAvalonia.OpenGL.Egl.EglInterface.cs#L64" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.intptr" target="_blank" rel="noopener noreferrer">IntPtr</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a>[]</dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.intptr" target="_blank" rel="noopener noreferrer">IntPtr</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a></dt><dd> </dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>

## See Also


#### Reference
<a href="T_Avalonia_OpenGL_Egl_EglInterface">EglInterface Class</a>  
<a href="N_Avalonia_OpenGL_Egl">Avalonia.OpenGL.Egl Namespace</a>  

