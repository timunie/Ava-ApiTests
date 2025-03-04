import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# SizeOfSetProperty Field


Defines the AutomationProperties.SizeOfSet attached property.



## Definition
**Namespace:** <a href="N_Avalonia_Automation">Avalonia.Automation</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static readonly AttachedProperty<int> SizeOfSetProperty
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Shared ReadOnly SizeOfSetProperty As AttachedProperty(Of Integer)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
static val SizeOfSetProperty: AttachedProperty<int>
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/srcAvalonia.Controls/Automation/AutomationProperties.cs" title="View the source code">View Source</a>



#### Field Value
AttachedProperty(<a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a>)

## 
The SizeOfSet property describes the count of automation elements in a group or set that are considered to be siblings. SizeOfSet works in coordination with the PositionInSet property to describe the count of items in the set.

## See Also


#### Reference
<a href="T_Avalonia_Automation_AutomationProperties">AutomationProperties Class</a>  
<a href="N_Avalonia_Automation">Avalonia.Automation Namespace</a>  
