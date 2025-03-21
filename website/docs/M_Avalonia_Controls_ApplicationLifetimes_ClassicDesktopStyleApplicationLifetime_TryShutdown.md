# TryShutdown Method




## Definition
**Namespace:** <a href="N_Avalonia_Controls_ApplicationLifetimes">Avalonia.Controls.ApplicationLifetimes</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public bool TryShutdown(
	int exitCode = 0
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Function TryShutdown ( 
	Optional exitCode As Integer = 0
) As Boolean
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract TryShutdown : 
        ?exitCode : int 
(* Defaults:
        let _exitCode = defaultArg exitCode 0
*)
-> bool 
override TryShutdown : 
        ?exitCode : int 
(* Defaults:
        let _exitCode = defaultArg exitCode 0
*)
-> bool 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/ApplicationLifetimes/ClassicDesktopStyleApplicationLifetime.cs#L67" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a>  (Optional)</dt><dd> </dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>

#### Implements
<a href="M_Avalonia_Controls_ApplicationLifetimes_IClassicDesktopStyleApplicationLifetime_TryShutdown">IClassicDesktopStyleApplicationLifetime.TryShutdown(Int32)</a>  


## See Also


#### Reference
<a href="T_Avalonia_Controls_ApplicationLifetimes_ClassicDesktopStyleApplicationLifetime">ClassicDesktopStyleApplicationLifetime Class</a>  
<a href="N_Avalonia_Controls_ApplicationLifetimes">Avalonia.Controls.ApplicationLifetimes Namespace</a>  

