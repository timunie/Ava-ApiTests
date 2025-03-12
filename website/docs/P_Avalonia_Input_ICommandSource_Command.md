# Command Property


The command that will be executed when the class is "invoked." Classes that implement this interface should enable or disable based on the command's CanExecute return value. The property may be implemented as read-write if desired.



## Definition
**Namespace:** <a href="N_Avalonia_Input">Avalonia.Input</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
ICommand? Command { get; }
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
ReadOnly Property Command As ICommand
	Get
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract Command : ICommand with get
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Input/ICommandSource.cs" title="View the source code">View Source</a>



#### Property Value
<a href="https://learn.microsoft.com/dotnet/api/system.windows.input.icommand" target="_blank" rel="noopener noreferrer">ICommand</a>

## See Also


#### Reference
<a href="T_Avalonia_Input_ICommandSource">ICommandSource Interface</a>  
<a href="N_Avalonia_Input">Avalonia.Input Namespace</a>  

