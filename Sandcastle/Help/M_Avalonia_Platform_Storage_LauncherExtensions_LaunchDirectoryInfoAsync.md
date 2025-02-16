---
title:LaunchDirectoryInfoAsync Method
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# LaunchDirectoryInfoAsync Method




## Definition
**Namespace:** <a href="N_Avalonia_Platform_Storage">Avalonia.Platform.Storage</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.4

**C#**
``` C#
public static Task<bool> LaunchDirectoryInfoAsync(
	this ILauncher launcher,
	DirectoryInfo directoryInfo
)
```
**VB**
``` VB
<ExtensionAttribute>
Public Shared Function LaunchDirectoryInfoAsync ( 
	launcher As ILauncher,
	directoryInfo As DirectoryInfo
) As Task(Of Boolean)
```
**F#**
``` F#
[<ExtensionAttribute>]
static member LaunchDirectoryInfoAsync : 
        launcher : ILauncher * 
        directoryInfo : DirectoryInfo -> Task<bool> 
```



#### Parameters
<dl><dt>  <a href="T_Avalonia_Platform_Storage_ILauncher">ILauncher</a></dt><dd> </dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.io.directoryinfo" target="_blank" rel="noopener noreferrer">DirectoryInfo</a></dt><dd> </dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1" target="_blank" rel="noopener noreferrer">Task</a>(<a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>)

#### Usage Note
In Visual Basic and C#, you can call this method as an instance method on any object of type <a href="T_Avalonia_Platform_Storage_ILauncher">ILauncher</a>. When you use instance method syntax to call this method, omit the first parameter. For more information, see <a href="https://docs.microsoft.com/dotnet/visual-basic/programming-guide/language-features/procedures/extension-methods" target="_blank" rel="noopener noreferrer">

Extension Methods (Visual Basic)</a> or <a href="https://docs.microsoft.com/dotnet/csharp/programming-guide/classes-and-structs/extension-methods" target="_blank" rel="noopener noreferrer">

Extension Methods (C# Programming Guide)</a>.

## See Also


#### Reference
<a href="T_Avalonia_Platform_Storage_LauncherExtensions">LauncherExtensions Class</a>  
<a href="N_Avalonia_Platform_Storage">Avalonia.Platform.Storage Namespace</a>  
