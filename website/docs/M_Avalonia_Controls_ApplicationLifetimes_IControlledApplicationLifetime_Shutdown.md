# Shutdown Method


Shuts down the application and sets the exit code that is returned to the operating system when the application exits.



## Definition
**Namespace:** <a href="N_Avalonia_Controls_ApplicationLifetimes">Avalonia.Controls.ApplicationLifetimes</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
void Shutdown(
	int exitCode = 0
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Sub Shutdown ( 
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
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/ApplicationLifetimes/IControlledApplicationLifetime.cs" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a>  (Optional)</dt><dd>An integer exit code for an application. The default exit code is 0.</dd></dl>

## See Also


#### Reference
<a href="T_Avalonia_Controls_ApplicationLifetimes_IControlledApplicationLifetime">IControlledApplicationLifetime Interface</a>  
<a href="N_Avalonia_Controls_ApplicationLifetimes">Avalonia.Controls.ApplicationLifetimes Namespace</a>  

