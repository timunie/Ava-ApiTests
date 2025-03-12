# Shutdown Method




## Definition
**Namespace:** <a href="N_Avalonia_Controls_ApplicationLifetimes">Avalonia.Controls.ApplicationLifetimes</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public void Shutdown(
	int exitCode = 0
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Sub Shutdown ( 
	Optional exitCode As Integer = 0
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract Shutdown : 
        ?exitCode : int 
(* Defaults:
        let _exitCode = defaultArg exitCode 0
*)
-> unit 
override Shutdown : 
        ?exitCode : int 
(* Defaults:
        let _exitCode = defaultArg exitCode 0
*)
-> unit 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/ApplicationLifetimes/ClassicDesktopStyleApplicationLifetime.cs#L62" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a>  (Optional)</dt><dd> </dd></dl>

#### Implements
<a href="M_Avalonia_Controls_ApplicationLifetimes_IControlledApplicationLifetime_Shutdown">IControlledApplicationLifetime.Shutdown(Int32)</a>  


## See Also


#### Reference
<a href="T_Avalonia_Controls_ApplicationLifetimes_ClassicDesktopStyleApplicationLifetime">ClassicDesktopStyleApplicationLifetime Class</a>  
<a href="N_Avalonia_Controls_ApplicationLifetimes">Avalonia.Controls.ApplicationLifetimes Namespace</a>  

