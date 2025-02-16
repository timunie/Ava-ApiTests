---
title:WriteResources(Stream, List&lt;ValueTuple&lt;String, Int32, Func&lt;Stream&gt;&gt;&gt;) Method
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# WriteResources(Stream, List&lt;ValueTuple&lt;String, Int32, Func&lt;Stream&gt;&gt;&gt;) Method
<blockquote><strong>Note: This API is now obsolete.</strong></blockquote>




## Definition
**Namespace:** <a href="N_Avalonia_Utilities">Avalonia.Utilities</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.4

**C#**
``` C#
[ObsoleteAttribute]
public static void WriteResources(
	Stream output,
	List<(string Path, int Size, Func<Stream> Open)> resources
)
```
**VB**
``` VB
<ObsoleteAttribute>
Public Shared Sub WriteResources ( 
	output As Stream,
	resources As List(Of (Path As String, Size As Integer, Open As Func(Of Stream)))
)
```
**F#**
``` F#
[<ObsoleteAttribute>]
static member WriteResources : 
        output : Stream * 
        resources : List<ValueTuple<string, int, Func<Stream>>> -> unit 
```



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.io.stream" target="_blank" rel="noopener noreferrer">Stream</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.list-1" target="_blank" rel="noopener noreferrer">List</a>(<a href="https://learn.microsoft.com/dotnet/api/system.valuetuple-3" target="_blank" rel="noopener noreferrer">ValueTuple</a>(<a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a>, <a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a>, <a href="https://learn.microsoft.com/dotnet/api/system.func-1" target="_blank" rel="noopener noreferrer">Func</a>(<a href="https://learn.microsoft.com/dotnet/api/system.io.stream" target="_blank" rel="noopener noreferrer">Stream</a>)))</dt><dd> </dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Utilities_AvaloniaResourcesIndexReaderWriter">AvaloniaResourcesIndexReaderWriter Class</a>  
<a href="Overload_Avalonia_Utilities_AvaloniaResourcesIndexReaderWriter_WriteResources">WriteResources Overload</a>  
<a href="N_Avalonia_Utilities">Avalonia.Utilities Namespace</a>  
